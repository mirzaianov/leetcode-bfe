const checkPowersOfThree = (n: number): boolean => {
  let x: number = n;

  while (x > 0) {
    const r: number = x % 3;

    if (r === 2) return false;

    x = Math.floor(x / 3);
  }

  return true;
};

export default checkPowersOfThree;
