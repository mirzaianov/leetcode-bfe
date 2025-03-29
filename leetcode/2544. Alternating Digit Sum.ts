const alternateDigitSum = (n: number): number => {
  let sign = 1;
  let res = 0;

  for (const l of String(n)) {
    res += sign * Number(l);
    sign *= -1;
  }

  return res;
};

export default alternateDigitSum;
