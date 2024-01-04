const decrypt = (code: number[], k: number): number[] => {
  const res: number[] = Array(code.length).fill(0);

  if (k === 0) return res;

  const dir = k < 0 ? 1 : -1;
  const len = code.length;

  for (let i = 0; i < len; i += 1) {
    for (let j = k; j !== 0; j += dir) {
      const index = (i + j + len) % len;

      res[i] += code[index];
    }
  }

  return res;
};

console.log(decrypt([5, 7, 1, 4], 3)); // [12,10,16,13]
// console.log(decrypt([1, 2, 3, 4], 0)); // [0,0,0,0]
// console.log(decrypt([2, 4, 9, 3], -2)); // [12,5,6,13]
