'use strict';

var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var swig = require('gulp-swig');


var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback')

// minify css + js > what is uglify?
// neat -> bourbon
// check notify?

gulp.task('index', function () {
  var target = gulp.src('./source/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:

  return target.pipe(inject(sources))
    .pipe(gulp.dest('/source'));
});


/*
  Styles Task
*/

gulp.task('sass',function() {
  // move over fonts

  gulp.src('/source/stylesheets/fonts/**.*')
    .pipe(gulp.dest('dist/css/fonts'))

  // Compiles CSS
  gulp.src('source/stylesheets/all.scss')  // take index.scss only
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(reload({stream:true}))
});

// Compiles html
gulp.task('templates', function() {
  return gulp.src('*.html')
    .pipe(swig({
      defaults: { cache: false }
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({stream: true}));
});

/*
  Images
*/
gulp.task('images',function(){
  gulp.src('source/images/**')
    .pipe(gulp.dest('./dist/images'))
});

/*
  Browser Sync
*/
gulp.task('browser-sync', function() {
    browserSync({
        // we need to disable clicks and forms for when we test multiple rooms
        server : {},
        middleware : [ historyApiFallback() ],
        ghostMode: false
    });
});

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {
  var props = {
    entries: ['./source/javascripts/' + file],
    debug : true,
    cache: {},
    packageCache: {},
    transform:  [babelify.configure({stage : 0 })]
  };

  // watchify() if watch requested, otherwise run browserify() once
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest('./dist/javascripts/'))
      // If you also want to uglify it
      // .pipe(buffer())
      // .pipe(uglify())
      // .pipe(rename('app.min.js'))
      // .pipe(gulp.dest('./dist/javascripts/'))
      .pipe(reload({stream:true}))
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

gulp.task('scripts', function() {
  return buildScript('main.js', false); // this will run once because we set watch to false
});


// run 'scripts' task first, then watch for future changes
gulp.task('default', ['images','sass', 'templates', 'scripts','browser-sync'], function() {
  gulp.watch('source/stylesheets/**/*', ['sass']); // gulp watch for sass changes
  gulp.watch('*.html', ['templates']);  // gulp watch for html changes
  return buildScript('main.js', true); // browserify watch for JS changes
});






