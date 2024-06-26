const isHappy = (n: number): boolean => {
  const set = new Set<number>();

  const check = (num: number): boolean => {
    set.add(num);

    const res: number = String(num)
      .split('')
      .reduce((acc: number, item: string) => acc + Number(item) ** 2, 0);

    if (res === 1) return true;
    if (set.has(res)) return false;

    return check(res);
  };

  return check(n);
};
