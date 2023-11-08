const intersection = (nums) => {
  const res = [];
  const map = new Map();
  const len = nums.length;

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < nums[i].length; j += 1) {
      const el = nums[i][j];
      map.set(el, map.get(el) + 1 || 1);
    }
  }

  for (const [key, value] of map) {
    if (value === len) res.push(key);
  }

  return res.sort((a, b) => a - b);
};

console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ]),
); // [3, 4]
console.log(
  intersection([
    [1, 2, 3],
    [4, 5, 6],
  ]),
); // []
