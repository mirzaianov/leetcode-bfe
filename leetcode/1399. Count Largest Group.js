const countLargestGroup = (n) => {
  const map = new Map();
  let max = -Infinity;
  let count = 0;

  for (let i = 1; i <= n; i += 1) {
    const sum = String(i)
      .split('')
      .reduce((acc, item) => acc + Number(item), 0);

    map.set(sum, map.get(sum) + 1 || 1);
  }

  for (const [key, value] of map) {
    if (value > max) {
      max = value;
      count = 1;
    } else if (value === max) {
      count += 1;
    }
  }

  return count;
};

// console.log(countLargestGroup(13)); // 4
// console.log(countLargestGroup(2)); // 2
console.log(countLargestGroup(46)); // 6
