const findCenter = (edges) => {
  const [[a, b], [c, d]] = edges;

  return a === c || b === c ? c : d;
};

console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ]),
); // 2
console.log(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
  ]),
); // 1
