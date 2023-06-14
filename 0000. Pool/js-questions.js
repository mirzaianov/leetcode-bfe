console.log('apple');

setTimeout(() => console.log('pear'), 0);

Promise.resolve('melon').then((res) => console.log(res));

new Promise((resolve, reject) => {
  console.log('orange');
  resolve('pineapple');
}).then((res) => console.log(res));

console.log('lime');

// apple, orange, lime, pineapple, melon, pear

console.log('5 3 2 11'.split(' ').sort());

// Console.log of the function is 'function':

const myFunc = () => {};
console.log(typeof myFunc);

// При вводе имени и фамилии вернуть инициалы

const myInit = (s) => {
  return s
    .split(' ')
    .map((e) => `${e.slice(0, 1).toUpperCase()}.`)
    .join('');
};

console.log(myInit('bill Gates')); // 'B.G.'

//
