var kWeakestRows = function (mat, k) {
  const map = new Map();

  for (let i = 0; i < mat.length; i++) {
    const sum = mat[i].reduce((acc, item) => acc + item, 0);

    map.set(i, sum);
  }

  const sortedMap = Array.from(map).sort((a, b) => a[1] - b[1]);

  return sortedMap.map(item => item[0]).slice(0, k);
};

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3,
  ),
); // [2,0,3]
console.log(
  kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    2,
  ),
); // [0,2]
