const shiftLeft = (arr: number[], k: number): number[] => {
  const newArr: number[] = [...arr];

  for (let i = 0; i < k; i += 1) {
    const first = newArr.shift();

    if (first !== undefined) newArr.push(first);
  }

  return newArr;
};

const shiftRight = (arr: number[], k: number): number[] => {
  const newArr: number[] = [...arr];

  for (let i = 0; i < k; i += 1) {
    const last = newArr.pop();

    if (last !== undefined) newArr.unshift(last);
  }

  return newArr;
};

const areSimilar = (mat: number[][], k: number): boolean => {
  const newMat: number[][] = [];

  for (let i = 0; i < mat.length; i += 1) {
    if (i % 2 === 0) {
      newMat.push(shiftLeft([...mat[i]], k));
    } else {
      newMat.push(shiftRight([...mat[i]], k));
    }
  }

  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat[0].length; j += 1) {
      if (mat[i][j] !== newMat[i][j]) return false;
    }
  }

  return true;
};

export default areSimilar;
