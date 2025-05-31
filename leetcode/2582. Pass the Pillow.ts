const passThePillow = (n: number, time: number): number => {
  let dir = true;
  let i = 1;

  while (time > 0) {
    if (dir) {
      i += 1;

      if (i === n) dir = false;
    } else {
      i -= 1;

      if (i === 1) dir = true;
    }

    time -= 1;
  }

  return i;
};

export default passThePillow;
