const matrixReshape = (mat: number[][], r: number, c: number): number[][] => {
  const n: number = mat.length;
  const m: number = mat[0].length;

  if (n * m !== r * c) return mat;

  const flat: number[] = mat.flat();
  const res: number[][] = [];

  for (let i = 0; i < flat.length; i += c) {
    res.push(flat.slice(i, i + c));
  }

  return res;
};

export default matrixReshape;
