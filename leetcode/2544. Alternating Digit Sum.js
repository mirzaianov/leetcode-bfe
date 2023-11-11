const alternateDigitSum = (n) => {
  const s = n.toString();
  let res = 0;
  let sign = 1;
  let i = 0;

  while (s[i]) {
    res += Number(s[i]) * sign;

    sign *= -1;
    i += 1;
  }

  return res;
};
