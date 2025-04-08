const applyOperations = (nums: number[]): number[] => {
  const copy: number[] = [...nums];

  for (let i = 0; i < copy.length - 1; i += 1) {
    if (copy[i] === copy[i + 1]) {
      copy[i] *= 2;
      copy[i + 1] = 0;
    }
  }

  let l = 0;
  let r = 0;

  while (r < copy.length) {
    if (copy[l] === 0 && copy[r] !== 0) {
      [copy[l], copy[r]] = [copy[r], copy[l]];
      l += 1;
    } else if (copy[l] !== 0 && copy[r] !== 0) {
      r += 1;
      l += 1;
    } else if (copy[l] === 0 && copy[r] === 0) {
      r += 1;
    }
  }

  return copy;
};

export default applyOperations;
