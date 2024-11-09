const decompressRLElist = (nums: number[]): number[] => {
  const res: number[] = [];

  for (let i = 0; i < nums.length; i += 2) {
    const val: number = nums[i + 1];
    let freq: number = nums[i];

    while (freq) {
      res.push(val);
      freq -= 1;
    }
  }

  return res;
};

export default decompressRLElist;
