function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] === 'function') {
      copy[key] = new Function('return ' + obj[key].toString())();
    } else {
      copy[key] = deepCopy(obj[key]);
    }
  });

  return copy;
}

const example = {
  name: `Peter`,
  age: 28,
  books: {
    horror: 'Shining',
    drama: 'The Escape from Showshank',
  },
  money: [100, 50, 200],
  sayHello: function () {
    console.log(`Hello, ${this.name}`);
  },
};

console.log(example);
console.log(deepCopy(example));
