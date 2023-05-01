var commonFactors = function (a, b) {
  let count = 1;
  const n = a > b ? b : a;

  for (let i = 2; i <= n; i++) {
    if (a % i === 0 && b % i === 0) count++;
  }

  return count;
};
