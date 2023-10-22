const differenceOfSums = (n, m) => {
  let count = 0;

  for (let i = 1; i <= n; i += 1) {
    if (i % m !== 0) count += i;
    if (i % m === 0) count -= i;
  }

  return count;
};
