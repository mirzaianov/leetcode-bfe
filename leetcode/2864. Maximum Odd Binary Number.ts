const maximumOddBinaryNumber = (s: string): string => {
  const ones: number = s.split('').filter((item) => item === '1').length;
  let i = 0;
  let res = '';

  while (i < ones - 1) {
    res += '1';
    i += 1;
  }

  while (i < s.length - 1) {
    res += '0';
    i += 1;
  }

  res += '1';

  return res;
};

export default maximumOddBinaryNumber;
