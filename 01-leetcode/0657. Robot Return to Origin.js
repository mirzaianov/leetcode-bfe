var judgeCircle = function (moves) {
  let x = 0,
    y = 0;

  for (let move of moves) {
    if (move === 'L') x--;
    if (move === 'R') x++;
    if (move === 'U') y++;
    if (move === 'D') y--;
  }

  return x === 0 && y === 0;
};
