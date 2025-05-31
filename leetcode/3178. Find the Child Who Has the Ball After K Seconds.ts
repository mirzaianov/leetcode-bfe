const numberOfChild = (n: number, k: number): number => {
  let dir = true;
  let i = 0;

  while (k > 0) {
    if (dir) {
      i += 1;

      if (i === n - 1) dir = false;
    } else {
      i -= 1;

      if (i === 0) dir = true;
    }

    k -= 1;
  }

  return i;
};

export default numberOfChild;
