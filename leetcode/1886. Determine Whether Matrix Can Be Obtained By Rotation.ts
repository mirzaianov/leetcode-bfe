const rotateMatrix = (mat: number[][]): number[][] => {
  const res: number[][] = mat.map((item) => [...item]).reverse();
  const len: number = res.length;

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (i > j) {
        [res[i][j], res[j][i]] = [res[j][i], res[i][j]];
      }
    }
  }

  return res;
};

const findRotation = (mat: number[][], target: number[][]): boolean => {
  const targetString: string = JSON.stringify(target);
  let currMatrix: number[][] = mat.map((item) => [...item]);

  for (let i = 0; i < 4; i += 1) {
    const currString: string = JSON.stringify(currMatrix);

    if (currString === targetString) return true;

    currMatrix = rotateMatrix(currMatrix);
  }

  return false;
};

export default findRotation;
