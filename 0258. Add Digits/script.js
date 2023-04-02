// const addDigits = function (num) {
//   if (num <= 9) return num;

//   let toString = num
//     .toString()
//     .split('')
//     .reduce((a, b) => +a + +b);

//   console.log(toString);

//   return addDigits(toString);
// };

const addDigits = function (num) {
  if (num === 0) return 0;
  else if (num % 9 === 0) return 9;
  else return num % 9;
};

console.log(addDigits(38)); // 2
console.log(addDigits(11)); // 0
