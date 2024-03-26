const minimumAbsDifference = (arr: number[]): number[][] => {
  arr.sort((a, b) => a - b);

  const len = arr.length;
  let minDiff: number = Infinity;

  for (let i = 0; i < len - 1; i += 1) {
    minDiff = Math.min(minDiff, arr[i + 1] - arr[i]);
  }

  const res: number[][] = [];

  for (let i = 0; i < len - 1; i += 1) {
    if (arr[i + 1] - arr[i] === minDiff) res.push([arr[i], arr[i + 1]]);
  }

  return res;
};
