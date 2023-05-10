var findGCD = function (nums) {
  let minNum = Infinity,
    maxNum = -Infinity;

  for (let number of nums) {
    minNum = Math.min(minNum, number);
    maxNum = Math.max(maxNum, number);
  }

  for (let i = maxNum; i > 0; i--) {
    if (maxNum % i === 0 && minNum % i === 0) return i;
  }

  return -1;
};
