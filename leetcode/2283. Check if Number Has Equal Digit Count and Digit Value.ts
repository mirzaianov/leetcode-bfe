const digitCount = (num: string): boolean => {
  const map = new Map<string, number>();

  for (const d of num) {
    map.set(d, (map.get(d) || 0) + 1);
  }

  for (let i = 0; i < num.length; i += 1) {
    if (map.get(String(i)) === Number(num[i])) continue;
    else if (map.get(String(i)) === undefined && Number(num[i]) === 0) continue;

    return false;
  }

  return true;
};

export default digitCount;
