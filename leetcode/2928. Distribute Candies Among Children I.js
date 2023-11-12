const distributeCandies = (n, limit) => {
  const ways = (num, lim) => {
    const min = Math.max(0, num - lim);
    const max = Math.min(num, lim);
    return Math.max(0, max - min + 1);
  };

  let res = 0;

  for (let i = 0; i <= Math.min(n, limit); i += 1) {
    res += ways(n - i, limit);
  }

  return res;
};

console.log(distributeCandies(5, 2)); // 3
console.log(distributeCandies(3, 3)); // 10
