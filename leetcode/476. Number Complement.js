// const findComplement = (num) => {
//   const binary = num.toString(2).split('');
//   const res = [];

//   for (const item of binary) {
//     if (item === '0') res.push('1');
//     if (item === '1') res.push('0');
//   }

//   return parseInt(res.join(''), 2);
// };

const findComplement = (num) => {
  let mask = 1;

  while (mask < num) {
    mask = (mask << 1) | 1;
  }

  return num ^ mask;
};

console.log(findComplement(5)); // 2
console.log(findComplement(30)); // 1
console.log(findComplement(1)); // 0
