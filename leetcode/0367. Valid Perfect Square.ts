const isPerfectSquare = (num: number): boolean => {
  let l = 0;
  let r: number = num;

  while (l <= r) {
    const m: number = l + Math.floor((r - l) / 2);

    if (m * m === num) return true;

    if (m * m > num) r = m - 1;

    if (m * m < num) l = m + 1;
  }

  return false;
};

export default isPerfectSquare;
