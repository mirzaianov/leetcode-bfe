const construct2DArray = (original: number[], m: number, n: number): number[][] => {
  const len: number = original.length;

  if (len !== m * n) return [];

  const res: number[][] = [];

  for (let i = 0; i < len; i += n) {
    const curr: number[] = original.slice(i, i + n);

    res.push(curr);
  }

  return res;
};

export default construct2DArray;
