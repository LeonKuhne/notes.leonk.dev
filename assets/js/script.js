const filter = (elems, callback) => {
  let arr = [];
  for (let idx = 0; idx < elems.length; idx++) {
    arr.push(callback(idx, elems[idx]));
  }
  return arr;
};

const tag = (name, options = {}) => {
  let elem = document.createElement(name);

  // decorate
  elem.textContent = options.text;
  if (options.children) {
    for (let child of options.children) {
      elem.appendChild(child);
    }
  };
  if (typeof options.onclick === 'function') {
    elem.onclick = options.onclick;
  }

  return elem;
}