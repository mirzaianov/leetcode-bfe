const isThree = (n: number): boolean => {
  let count = 2;

  for (let i = 2; i <= Math.floor(n / 2); i += 1) {
    if (n % i === 0) count += 1;
  }

  return count === 3;
};

export default isThree;
