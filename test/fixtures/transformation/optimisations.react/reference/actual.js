var Foo = require('Foo');
function createComponent(text) {
  return function render() {
    return <Foo>{text}</Foo>;
  };
}
