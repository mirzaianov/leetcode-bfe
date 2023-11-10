const flipAndInvertImage = function (image) {
  const reversed = image.map((item) => item.reverse());

  for (let i = 0; i < reversed.length; i++) {
    for (let j = 0; j < reversed[i].length; j++) {
      if (reversed[i][j] === 0) reversed[i][j] = 1;
      else if (reversed[i][j] === 1) reversed[i][j] = 0;
    }
  }

  return reversed;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
); // [[1,0,0],[0,1,0],[1,1,1]]
console.log(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ])
); // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
