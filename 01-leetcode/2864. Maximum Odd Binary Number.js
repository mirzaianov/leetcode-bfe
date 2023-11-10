const maximumOddBinaryNumber = (s) => {
  const len = s.length;
  let count = 0;

  for (const letter of s) {
    if (letter === '1') count += 1;
  }

  let ones = count - 1;
  let zeros = len - count;
  let res = '';

  while (ones) {
    res += '1';
    ones -= 1;
  }

  while (zeros) {
    res += '0';
    zeros -= 1;
  }

  res += '1';

  return res;
};
