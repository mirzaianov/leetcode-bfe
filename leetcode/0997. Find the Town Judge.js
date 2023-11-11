const findJudge = (n, trust) => {
  const arr = new Array(n + 1).fill(0);

  for (const [i, j] of trust) {
    arr[i] -= 1;
    arr[j] += 1;
  }

  const len = arr.length;

  for (let i = 1; i < len; i += 1) {
    if (n - 1 === arr[i]) return i;
  }

  return -1;
};
