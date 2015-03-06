"use strict";

var Foo = require("Foo");
function createComponent(text) {
  var _ref = React.createElement(
    Foo,
    null,
    text
  );

  return function render() {
    return _ref;
  };
}
