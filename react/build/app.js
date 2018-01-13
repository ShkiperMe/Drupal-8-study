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
  loadScript(drupalSettings.react_app.polyfillURL, init);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdC9zcmMvaW5pdC5lczYiLCJ3ZWJwYWNrOi8vLy4vcmVhY3Qvc3JjL2xpYi9wb2x5ZmlsbHNSZXF1aXJlZC5lczYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmVuZG9yXCIiXSwibmFtZXMiOlsiaW5pdCIsImxvYWRTY3JpcHQiLCJzcmMiLCJkb25lIiwianMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJvbmxvYWQiLCJvbmVycm9yIiwiRXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJkcnVwYWxTZXR0aW5ncyIsInJlYWN0X2FwcCIsInBvbHlmaWxsVVJMIiwiZmV0Y2giLCJQcm9taXNlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaW5kIiwiT2JqZWN0IiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQTtBQUNBLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLFNBQ1gsOEVBRFc7QUFBQSxDQUFiOztBQUlBO0FBQ0EsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ2hDLE1BQU1DLEtBQUtDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWDtBQUNBRixLQUFHRixHQUFILEdBQVNBLEdBQVQ7QUFDQUUsS0FBR0csTUFBSCxHQUFZLFlBQVc7QUFDckJKLFlBQVFBLE1BQVI7QUFDRCxHQUZEO0FBR0FDLEtBQUdJLE9BQUgsR0FBYSxZQUFXO0FBQ3RCTCxZQUFRQSxLQUFLLElBQUlNLEtBQUosQ0FBVSwyQkFBMkJQLEdBQXJDLENBQUwsQ0FBUjtBQUNELEdBRkQ7QUFHQUcsV0FBU0ssSUFBVCxDQUFjQyxXQUFkLENBQTBCUCxFQUExQjtBQUNELENBVkQ7O0FBWUE7QUFDQSxJQUFJLGtDQUFKLEVBQXlCO0FBQ3ZCSCxhQUFXVyxlQUFlQyxTQUFmLENBQXlCQyxXQUFwQyxFQUFpRGQsSUFBakQ7QUFDRCxDQUZELE1BR0s7QUFDSEE7QUFDRCxDOzs7Ozs7Ozs7Ozs7O0FDMUJEOzs7OztrQkFLZTtBQUFBLFNBQ2IsT0FBT2UsS0FBUCxLQUFpQixXQUFqQixJQUNBLE9BQU9DLE9BQVAsS0FBbUIsV0FEbkIsSUFFQSxPQUFPQyxNQUFNQyxTQUFOLENBQWdCQyxJQUF2QixLQUFnQyxXQUZoQyxJQUdBLE9BQU9DLE9BQU9DLE1BQWQsS0FBeUIsV0FKWjtBQUFBLEM7Ozs7OztBQ0xmLHdCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb2x5ZmlsbHNSZXF1aXJlZCBmcm9tICdsaWIvcG9seWZpbGxzUmVxdWlyZWQnO1xuXG4vLyBJbml0aWFsaXplIHRoZSBhcHAuXG5jb25zdCBpbml0ID0gKCkgPT4gKFxuICBpbXBvcnQoJ2luZGV4Jylcbik7XG5cbi8vIExvYWQgYW5kIGFwcGVuZCBKUyB0byB0aGUgRE9NLlxuY29uc3QgbG9hZFNjcmlwdCA9IChzcmMsIGRvbmUpID0+IHtcbiAgY29uc3QganMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAganMuc3JjID0gc3JjO1xuICBqcy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBkb25lICYmIGRvbmUoKTtcbiAgfTtcbiAganMub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGRvbmUgJiYgZG9uZShuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHNjcmlwdCAnICsgc3JjKSk7XG4gIH07XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoanMpO1xufTtcblxuLy8gSWYgcG9seWZpbGxzIGFyZSByZXF1aXJlZCwgbG9hZCB0aGVtIGJlZm9yZSBpbml0aWFsaXppbmcgdGhlIGFwcC5cbmlmIChwb2x5ZmlsbHNSZXF1aXJlZCgpKSB7XG4gIGxvYWRTY3JpcHQoZHJ1cGFsU2V0dGluZ3MucmVhY3RfYXBwLnBvbHlmaWxsVVJMLCBpbml0KTtcbn1cbmVsc2Uge1xuICBpbml0KCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWFjdC9zcmMvaW5pdC5lczYiLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBwb2x5ZmlsbHMgYXJlIHJlcXVpcmVkIGZvciB0aGUgZm9sbG93aW5nIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIHR5cGVvZiBmZXRjaCA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnIHx8XG4gIHR5cGVvZiBBcnJheS5wcm90b3R5cGUuZmluZCA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgdHlwZW9mIE9iamVjdC52YWx1ZXMgPT09ICd1bmRlZmluZWQnXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVhY3Qvc3JjL2xpYi9wb2x5ZmlsbHNSZXF1aXJlZC5lczYiLCJtb2R1bGUuZXhwb3J0cyA9IHZlbmRvcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=