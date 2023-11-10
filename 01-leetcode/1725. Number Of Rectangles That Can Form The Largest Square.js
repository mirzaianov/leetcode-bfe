var countGoodRectangles = function (rectangles) {
  const lengths = {};

  for (let i = 0; i < rectangles.length; i++) {
    const max = Math.min(...rectangles[i]);

    lengths[max] = lengths[max] ? lengths[max] + 1 : 1;
  }

  return lengths[Math.max(...Object.keys(lengths))];
};

console.log(
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5],
  ])
); // 3
console.log(
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [3, 12],
  ])
); // 1
