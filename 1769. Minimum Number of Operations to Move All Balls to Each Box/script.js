// var minOperations = function (boxes) {
//   const res = [];

//   for (let i = 0; i < boxes.length; i++) {
//     let count = 0;

//     for (let j = 0; j < boxes.length; j++) {
//       if (j === i) continue;

//       if (boxes[j] == 1) count += Math.abs(j - i);
//     }

//     res.push(count);
//   }

//   return res;
// };

var minOperations = function (boxes) {
  const result = [];
  const ones = [];

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] == 1) ones.push(i);
  }

  console.log(ones);

  for (let i = 0; i < boxes.length; i++) {
    let count = 0;

    for (let j = 0; j < ones.length; j++) {
      count += Math.abs(ones[j] - i);
    }

    result[i] = count;
  }

  return result;
};

console.log(minOperations('110')); // [1,1,3]
console.log(minOperations('001011')); // [11,8,5,4,3,4]
