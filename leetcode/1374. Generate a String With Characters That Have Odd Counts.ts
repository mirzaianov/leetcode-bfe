const generateTheString = (n: number): string => {
  const a = 'a';
  const b = 'b';

  if (n % 2 !== 0) {
    return a.repeat(n);
  }

  return a + b.repeat(n - 1);
};

export default generateTheString;
