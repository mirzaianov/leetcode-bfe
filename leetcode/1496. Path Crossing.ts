const isPathCrossing = (path: string): boolean => {
  const set = new Set<string>();
  let x = 0;
  let y = 0;

  set.add(`x${x}y${y}`);

  for (const l of path) {
    switch (l) {
      case 'N': {
        x += 1;
        break;
      }
      case 'S': {
        x -= 1;
        break;
      }
      case 'E': {
        y += 1;
        break;
      }
      case 'W': {
        y -= 1;
        break;
      }
      default: {
        break;
      }
    }

    const curr = `x${x}y${y}`;

    if (set.has(curr)) return true;

    set.add(curr);
  }

  return false;
};

export default isPathCrossing;
