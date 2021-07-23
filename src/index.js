/** @jsx dom */
const dom = (name, props, ...children) => {
  const elem = document.createElement(name);
  Object.keys(props || {}).forEach((k) => {
    if (k === 'style') {
      Object.keys(props[k]).forEach((sk) => {
        elem.style[sk] = props[k][sk];
      });
    } else {
      elem[k] = props[k];
    }
  });

  const addChild = (child) => {
    if (Array.isArray(child)) {
      child.forEach((c) => addChild(c));
    } else if (typeof child === 'object') {
      elem.appendChild(child);
    } else {
      elem.appendChild(document.createTextNode(child));
    }
  };

  (children || []).forEach((c) => addChild(c));

  return elem;
};

document.getElementById('test').appendChild(
  <div>
    <div style={{ color: 'red', fontSize: '100px' }}>Hello there</div>
    {['lol', 'fun', 'text'].map((item, index) => (
      <div>{item}</div>
    ))}
  </div>
);
