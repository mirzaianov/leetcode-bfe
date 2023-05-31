var findNumbers = function (nums) {
  return nums.map((item) => `${item}`).filter((item) => item.length % 2 === 0).length;
};

console.log(findNumbers([12, 345, 2, 6, 7896])); // 2
