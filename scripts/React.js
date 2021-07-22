const React = (function () {
  let hooks = [];
  let idx = 0;
  function useState(initVal) {
    const state = hooks[idx] || initVal;
    const _idx = idx;
    const setState = (newVal) => {
      hooks[_idx] = newVal;
    };
    idx++;
    return [state, setState];
  }

  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }
  function useEffect(cb, depArray) {
    const oldDeps = hooks[idx];
    let hasChanged = true;
    // If (depArray[i] === oldDeps) - hasChanged = False // If (depArray[i] !== oldDeps[i]) -- hasChanged = True
    if (oldDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }
    if (hasChanged === true) cb();
    hooks[idx] = depArray;
    idx++;
  }
  return { useState, render, useEffect };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState('apple');
  React.useEffect(() => {
    console.log('Learning how react "works"');
  }, [text]);
  return {
    render: () => console.log(count, text),
    click: () => setCount(count + 1),
    type: (word) => setText(word),
  };
}

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.type('test');
var App = React.render(Component);
App.click();
var App = React.render(Component);
