const canAliceWin = (nums: number[]): boolean => {
  let single = 0;
  let double = 0;

  for (const n of nums) {
    if (n < 10) {
      single += n;
    } else {
      double += n;
    }
  }

  return single !== double;
};

export default canAliceWin;
