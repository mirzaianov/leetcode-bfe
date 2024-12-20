const rowAndMaximumOnes = (mat: number[][]): number[] => {
  const res = [0, 0];

  for (let i = 0; i < mat.length; i += 1) {
    const ones: number = mat[i].reduce((acc, item) => acc + item, 0);

    if (ones > res[1]) {
      res[0] = i;
      res[1] = ones;
    }
  }

  return res;
};

export default rowAndMaximumOnes;
