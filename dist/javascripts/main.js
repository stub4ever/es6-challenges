(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//require utils/index.js
var utils = require('./utils');

console.log('Client side code hello');

utils.count();

},{"./utils":2}],2:[function(require,module,exports){
'use strict';

module.exports = {
  count: count
};

function count() {
  var count = 0;
  setInterval(function () {
    return console.log(count++);
  }, 400);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvUS9Db2RlL3N0dWI0ZXZlci9lczYtY2hhbGxlbmdlcy9zb3VyY2UvamF2YXNjcmlwdHMvbWFpbi5qcyIsIi9Vc2Vycy9RL0NvZGUvc3R1YjRldmVyL2VzNi1jaGFsbGVuZ2VzL3NvdXJjZS9qYXZhc2NyaXB0cy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7O0FBR2IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7O0FBRXRDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7O0FDUGQsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDZixPQUFLLEVBQUwsS0FBSztDQUNOLENBQUM7O0FBRUYsU0FBUyxLQUFLLEdBQUc7QUFDZixNQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxhQUFXLENBQUM7V0FBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0dBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUM5QyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vcmVxdWlyZSB1dGlscy9pbmRleC5qc1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5jb25zb2xlLmxvZygnQ2xpZW50IHNpZGUgY29kZSBoZWxsbycpO1xuXG51dGlscy5jb3VudCgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY291bnRcbn07XG5cbmZ1bmN0aW9uIGNvdW50KCkge1xuICB2YXIgY291bnQgPSAwO1xuICBzZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZyhjb3VudCsrKSwgNDAwKTtcbn1cbiJdfQ==
