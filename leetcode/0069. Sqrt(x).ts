const mySqrt = (x: number): number => {
  if (x === 0) return 0;
  if (x === 1) return 1;

  let left = 1;
  let right = x;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (mid ** 2 <= x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left - 1;
};
