"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** @jsx dom */
var dom = function dom(name, props) {
  var elem = document.createElement(name);
  Object.keys(props || {}).forEach(function (k) {
    if (k === 'style') {
      Object.keys(props[k]).forEach(function (sk) {
        elem.style[sk] = props[k][sk];
      });
    } else {
      elem[k] = props[k];
    }
  });

  var addChild = function addChild(child) {
    if (Array.isArray(child)) {
      child.forEach(function (c) {
        return addChild(c);
      });
    } else if (_typeof(child) === 'object') {
      elem.appendChild(child);
    } else {
      elem.appendChild(document.createTextNode(child));
    }
  };

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  (children || []).forEach(function (c) {
    return addChild(c);
  });
  return elem;
};

document.getElementById('test').appendChild(dom("div", null, dom("div", {
  style: {
    color: 'red',
    fontSize: '100px'
  }
}, "Hello there"), ['lol', 'fun', 'text'].map(function (item, index) {
  return dom("div", null, item);
})));