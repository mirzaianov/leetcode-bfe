const myAtoi = (s: string): number => {
  const min = (-2) ** 31;
  const max = 2 ** 31 - 1;
  const c = parseInt(s, 10);

  if (!c) return 0;

  if (c < min) return min;

  if (c > max) return max;

  return c;
};

export default myAtoi;
