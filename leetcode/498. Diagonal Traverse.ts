const findDiagonalOrder = (mat: number[][]): number[] => {
  if (mat.length === 0) return [];

  const arrayMap = new Map<number, number[]>();
  const result: number[] = [];

  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat[0].length; j += 1) {
      if (!arrayMap.has(i + j)) {
        arrayMap.set(i + j, [mat[i][j]]);
      } else {
        arrayMap.set(i + j, [...arrayMap.get(i + j)!, mat[i][j]]);
      }
    }
  }

  let isDown = false;

  arrayMap.forEach((x) => {
    if (isDown) {
      result.push(...x);
    } else {
      result.push(...x.reverse());
    }

    isDown = !isDown;
  });

  return result;
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
); // [1,2,4,7,5,3,6,8,9]
