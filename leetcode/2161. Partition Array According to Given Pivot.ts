const pivotArray = (nums: number[], pivot: number): number[] => {
  const left: number[] = [];
  const right: number[] = [];
  const middle: number[] = [];

  for (const num of nums) {
    if (num < pivot) {
      left.push(num);
    } else if (num > pivot) {
      right.push(num);
    } else {
      middle.push(num);
    }
  }

  return [...left, ...middle, ...right];
};
