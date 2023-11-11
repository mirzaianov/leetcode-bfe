// var finalString = function (s) {
//   let res = '';

//   for (item of s) {
//     if (item === 'i') {
//       res = res.split('').reverse().join('');
//     } else {
//       res += item;
//     }
//   }

//   return res;
// };

// 2

var finalString = function (s) {
  let res = [];

  for (item of s) {
    if (item === 'i') {
      res = res.reverse();
    } else {
      res.push(item);
    }
  }

  return res.join('');
};

console.log(finalString('string')); // "rtsng"
console.log(finalString('poiinter')); // "ponter"
