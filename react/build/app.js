webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _polyfillsRequired = __webpack_require__(2);

var _polyfillsRequired2 = _interopRequireDefault(_polyfillsRequired);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize the app.
var init = function init() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 4));
};

// Load and append JS to the DOM.
var loadScript = function loadScript(src, done) {
  var js = document.createElement('script');
  js.src = src;
  js.onload = function () {
    done && done();
  };
  js.onerror = function () {
    done && done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
};

// If polyfills are required, load them before initializing the app.
if ((0, _polyfillsRequired2.default)()) {
  loadScript(Drupal.settings.jysk_react.polyfillURL, init);
} else {
  init();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Returns true if polyfills are required for the following functions.
 *
 * @return {boolean}
 */
exports.default = function () {
  return typeof fetch === 'undefined' || typeof Promise === 'undefined' || typeof Array.prototype.find === 'undefined' || typeof Object.values === 'undefined';
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = vendor;

/***/ })
],[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdC9zcmMvaW5pdC5lczYiLCJ3ZWJwYWNrOi8vLy4vcmVhY3Qvc3JjL2xpYi9wb2x5ZmlsbHNSZXF1aXJlZC5lczYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmVuZG9yXCIiXSwibmFtZXMiOlsiaW5pdCIsImxvYWRTY3JpcHQiLCJzcmMiLCJkb25lIiwianMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJvbmxvYWQiLCJvbmVycm9yIiwiRXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJEcnVwYWwiLCJzZXR0aW5ncyIsImp5c2tfcmVhY3QiLCJwb2x5ZmlsbFVSTCIsImZldGNoIiwiUHJvbWlzZSIsIkFycmF5IiwicHJvdG90eXBlIiwiZmluZCIsIk9iamVjdCIsInZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxTQUNYLDhFQURXO0FBQUEsQ0FBYjs7QUFJQTtBQUNBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNoQyxNQUFNQyxLQUFLQyxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQVg7QUFDQUYsS0FBR0YsR0FBSCxHQUFTQSxHQUFUO0FBQ0FFLEtBQUdHLE1BQUgsR0FBWSxZQUFXO0FBQ3JCSixZQUFRQSxNQUFSO0FBQ0QsR0FGRDtBQUdBQyxLQUFHSSxPQUFILEdBQWEsWUFBVztBQUN0QkwsWUFBUUEsS0FBSyxJQUFJTSxLQUFKLENBQVUsMkJBQTJCUCxHQUFyQyxDQUFMLENBQVI7QUFDRCxHQUZEO0FBR0FHLFdBQVNLLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlAsRUFBMUI7QUFDRCxDQVZEOztBQVlBO0FBQ0EsSUFBSSxrQ0FBSixFQUF5QjtBQUN2QkgsYUFBV1csT0FBT0MsUUFBUCxDQUFnQkMsVUFBaEIsQ0FBMkJDLFdBQXRDLEVBQW1EZixJQUFuRDtBQUNELENBRkQsTUFHSztBQUNIQTtBQUNELEM7Ozs7Ozs7Ozs7Ozs7QUMxQkQ7Ozs7O2tCQUtlO0FBQUEsU0FDYixPQUFPZ0IsS0FBUCxLQUFpQixXQUFqQixJQUNBLE9BQU9DLE9BQVAsS0FBbUIsV0FEbkIsSUFFQSxPQUFPQyxNQUFNQyxTQUFOLENBQWdCQyxJQUF2QixLQUFnQyxXQUZoQyxJQUdBLE9BQU9DLE9BQU9DLE1BQWQsS0FBeUIsV0FKWjtBQUFBLEM7Ozs7OztBQ0xmLHdCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb2x5ZmlsbHNSZXF1aXJlZCBmcm9tICdsaWIvcG9seWZpbGxzUmVxdWlyZWQnO1xuXG4vLyBJbml0aWFsaXplIHRoZSBhcHAuXG5jb25zdCBpbml0ID0gKCkgPT4gKFxuICBpbXBvcnQoJ2luZGV4Jylcbik7XG5cbi8vIExvYWQgYW5kIGFwcGVuZCBKUyB0byB0aGUgRE9NLlxuY29uc3QgbG9hZFNjcmlwdCA9IChzcmMsIGRvbmUpID0+IHtcbiAgY29uc3QganMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAganMuc3JjID0gc3JjO1xuICBqcy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBkb25lICYmIGRvbmUoKTtcbiAgfTtcbiAganMub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGRvbmUgJiYgZG9uZShuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHNjcmlwdCAnICsgc3JjKSk7XG4gIH07XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoanMpO1xufTtcblxuLy8gSWYgcG9seWZpbGxzIGFyZSByZXF1aXJlZCwgbG9hZCB0aGVtIGJlZm9yZSBpbml0aWFsaXppbmcgdGhlIGFwcC5cbmlmIChwb2x5ZmlsbHNSZXF1aXJlZCgpKSB7XG4gIGxvYWRTY3JpcHQoRHJ1cGFsLnNldHRpbmdzLmp5c2tfcmVhY3QucG9seWZpbGxVUkwsIGluaXQpO1xufVxuZWxzZSB7XG4gIGluaXQoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlYWN0L3NyYy9pbml0LmVzNiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHBvbHlmaWxscyBhcmUgcmVxdWlyZWQgZm9yIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgdHlwZW9mIGZldGNoID09PSAndW5kZWZpbmVkJyB8fFxuICB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgdHlwZW9mIEFycmF5LnByb3RvdHlwZS5maW5kID09PSAndW5kZWZpbmVkJyB8fFxuICB0eXBlb2YgT2JqZWN0LnZhbHVlcyA9PT0gJ3VuZGVmaW5lZCdcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWFjdC9zcmMvbGliL3BvbHlmaWxsc1JlcXVpcmVkLmVzNiIsIm1vZHVsZS5leHBvcnRzID0gdmVuZG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmVuZG9yXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==