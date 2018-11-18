(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var util = {
  init: function init() {
    this.select();
    this.selectAll();
    this.windowWidth();
    this.windowHeight();
  },
  select: function select() {
    return window.select = function (s) {
      return document.querySelector(s);
    };
  },
  selectAll: function selectAll() {
    return window.selectAll = function (s) {
      return document.querySelectorAll(s);
    };
  },
  windowWidth: function windowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  },
  windowHeight: function windowHeight() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }
};

exports.default = util;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsidXRpbCIsImluaXQiLCJzZWxlY3QiLCJzZWxlY3RBbGwiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsInMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm9keSIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLE9BQU87QUFDWEMsUUFBTSxnQkFBWTtBQUNoQixTQUFLQyxNQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUNBLFNBQUtDLFdBQUw7QUFDQSxTQUFLQyxZQUFMO0FBQ0QsR0FOVTtBQU9YSCxRQVBXLG9CQU9GO0FBQ1AsV0FBT0ksT0FBT0osTUFBUCxHQUFnQixVQUFVSyxDQUFWLEVBQWE7QUFDbEMsYUFBT0MsU0FBU0MsYUFBVCxDQUF1QkYsQ0FBdkIsQ0FBUDtBQUNELEtBRkQ7QUFHRCxHQVhVO0FBWVhKLFdBWlcsdUJBWUM7QUFDVixXQUFPRyxPQUFPSCxTQUFQLEdBQW1CLFVBQVVJLENBQVYsRUFBYTtBQUNyQyxhQUFPQyxTQUFTRSxnQkFBVCxDQUEwQkgsQ0FBMUIsQ0FBUDtBQUNELEtBRkQ7QUFHRCxHQWhCVTtBQWtCWEgsYUFsQlcseUJBa0JHO0FBQ1osV0FBT0UsT0FBT0ssVUFBUCxJQUFxQkgsU0FBU0ksZUFBVCxDQUF5QkMsV0FBOUMsSUFBNkRMLFNBQVNNLElBQVQsQ0FBY0QsV0FBbEY7QUFDRCxHQXBCVTtBQXNCWFIsY0F0QlcsMEJBc0JJO0FBQ2IsV0FBT0MsT0FBT1MsV0FBUCxJQUFzQlAsU0FBU0ksZUFBVCxDQUF5QkksWUFBL0MsSUFBK0RSLFNBQVNNLElBQVQsQ0FBY0UsWUFBcEY7QUFDRDtBQXhCVSxDQUFiOztrQkEyQmVoQixJIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1dGlsID0ge1xyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2VsZWN0KCk7XHJcbiAgICB0aGlzLnNlbGVjdEFsbCgpO1xyXG4gICAgdGhpcy53aW5kb3dXaWR0aCgpO1xyXG4gICAgdGhpcy53aW5kb3dIZWlnaHQoKTtcclxuICB9LFxyXG4gIHNlbGVjdCgpIHtcclxuICAgIHJldHVybiB3aW5kb3cuc2VsZWN0ID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocyk7XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgc2VsZWN0QWxsKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5zZWxlY3RBbGwgPSBmdW5jdGlvbiAocykge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzKTtcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgd2luZG93V2lkdGgoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgfSxcclxuXHJcbiAgd2luZG93SGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbDtcclxuIl19
},{}]},{},[1])