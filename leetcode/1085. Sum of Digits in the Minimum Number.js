const sumOfDigits = (nums) =>
  String(Math.min(...nums))
    .split('')
    .reduce((acc, item) => acc + Number(item), 0) %
    2 ===
  0;

console.log(sumOfDigits([20, 10, 15, 19])); // false
console.log(sumOfDigits([444, 555, 333, 222])); // true
