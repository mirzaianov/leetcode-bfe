const judgeCircle = (moves: string): boolean => {
  let x = 0;
  let y = 0;

  for (const m of moves) {
    switch (m) {
      case 'U':
        y += 1;
        break;
      case 'D':
        y -= 1;
        break;
      case 'R':
        x += 1;
        break;
      case 'L':
        x -= 1;
        break;
      default:
        break;
    }
  }

  return !x && !y;
};

export default judgeCircle;
