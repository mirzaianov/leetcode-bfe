const commonFactors = (a: number, b: number): number => {
  let count = 0;

  for (let i = 1; i <= (a < b ? a : b); i += 1) {
    if (a % i === 0 && b % i === 0) count += 1;
  }

  return count;
};

export default commonFactors;
