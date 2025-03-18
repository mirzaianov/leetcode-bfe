const findTheArrayConcVal = (nums: number[]): number => {
  let l = 0;
  let r: number = nums.length - 1;
  let res = 0;

  while (l <= r) {
    const word = l === r ? nums[l] : `${nums[l]}${nums[r]}`;

    res += Number(word);
    l += 1;
    r -= 1;
  }

  return res;
};

export default findTheArrayConcVal;
