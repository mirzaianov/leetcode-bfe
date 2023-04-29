// var separateDigits = function (nums) {
//   const res = [];

//   while (nums.length) {
//     let item = nums.shift();

//     item = `${item}`.split('');

//     res.push(...item);
//   }

//   return res;
// };

var separateDigits = function (nums) {
  return Array.from(nums.join(''), Number);
};

console.log(separateDigits([13, 25, 83, 77])); // [1,3,2,5,8,3,7,7]
console.log(separateDigits([7, 1, 3, 9])); // [7,1,3,9]
