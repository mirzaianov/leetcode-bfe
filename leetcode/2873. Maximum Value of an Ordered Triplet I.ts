const maximumTripletValue = (nums: number[]): number => {
  const len: number = nums.length;
  let maxTripletValue = 0;

  for (let i = 0; i < len - 2; i += 1) {
    for (let j = i + 1; j < len - 1; j += 1) {
      for (let k = j + 1; k < len; k += 1) {
        const triplet: number = (nums[i] - nums[j]) * nums[k];

        maxTripletValue = Math.max(maxTripletValue, triplet);
      }
    }
  }

  return maxTripletValue;
};

export default maximumTripletValue;
