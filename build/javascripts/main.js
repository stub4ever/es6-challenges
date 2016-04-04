(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//require utils/index.js
var utils = require('../../utils');

console.log('Client side code hello');

utils.count();

},{"../../utils":2}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvUS9Db2RlL3N0dWI0ZXZlci9lczYtY2hhbGxlbmdlcy9zb3VyY2UvamF2YXNjcmlwdHMvbWFpbi5qcyIsIi9Vc2Vycy9RL0NvZGUvc3R1YjRldmVyL2VzNi1jaGFsbGVuZ2VzL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7QUFHYixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQzs7QUFFdEMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7QUNQZCxZQUFZLENBQUM7O0FBRWIsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNmLE9BQUssRUFBTCxLQUFLO0NBQ04sQ0FBQzs7QUFFRixTQUFTLEtBQUssR0FBRztBQUNmLE1BQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLGFBQVcsQ0FBQztXQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7R0FBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzlDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy9yZXF1aXJlIHV0aWxzL2luZGV4LmpzXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xuXG5jb25zb2xlLmxvZygnQ2xpZW50IHNpZGUgY29kZSBoZWxsbycpO1xuXG51dGlscy5jb3VudCgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY291bnRcbn07XG5cbmZ1bmN0aW9uIGNvdW50KCkge1xuICB2YXIgY291bnQgPSAwO1xuICBzZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZyhjb3VudCsrKSwgNDAwKTtcbn1cbiJdfQ==
