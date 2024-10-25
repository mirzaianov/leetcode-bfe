const validStrings = (n: number): string[] => {
  if (n === 1) return ['0', '1'];

  const prev = validStrings(n - 1);
  const res = [];

  for (const item of prev) {
    if (item.at(-1) === '1') res.push(item + '0');

    res.push(item + '1');
  }

  return res;
};

export default validStrings;
