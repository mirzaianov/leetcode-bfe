const findKthPositive = (arr: number[], k: number): number => {
  let l = 0;
  let r: number = arr.length - 1;

  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);

    if (arr[m] - m - 1 < k) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return l + k;
};

export default findKthPositive;
