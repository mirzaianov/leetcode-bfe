const digitCount = (num: string): boolean => {
  const map = new Map<number, number>();

  for (const d of num) {
    const curr: number = Number(d);

    map.set(curr, (map.get(curr) || 0) + 1);
  }

  for (let i = 0; i < num.length; i += 1) {
    const curr: number = Number(num[i]);

    if (map.get(i) === curr) continue;
    if (map.get(i) === undefined && curr === 0) continue;

    return false;
  }

  return true;
};

export default digitCount;
