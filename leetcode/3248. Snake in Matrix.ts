const finalPositionOfSnake = (n: number, commands: string[]): number => {
  let i = 0;
  let j = 0;

  for (const c of commands) {
    switch (c) {
      case 'UP':
        i -= 1;
        break;
      case 'RIGHT':
        j += 1;
        break;
      case 'DOWN':
        i += 1;
        break;
      case 'LEFT':
        j -= 1;
        break;
      default:
        break;
    }
  }

  return i * n + j;
};

export default finalPositionOfSnake;
