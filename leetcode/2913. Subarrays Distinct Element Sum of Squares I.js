const sumCounts = (nums) => {
  const res = [];
  const len = nums.length;

  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j <= len; j += 1) {
      res.push(new Set(nums.slice(i, j)).size);
    }
  }

  return res.reduce((acc, item) => acc + item ** 2);
};

console.log(sumCounts([1, 2, 1])); // 15
console.log(sumCounts([1, 1])); // 3
