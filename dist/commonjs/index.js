'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaDummy = require('./aurelia-dummy');

Object.keys(_aureliaDummy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaDummy[key];
    }
  });
});