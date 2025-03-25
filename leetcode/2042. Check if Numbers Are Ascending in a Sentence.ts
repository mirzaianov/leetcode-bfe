const areNumbersAscending = (s: string): boolean => {
  const arr: string[] = s.split(' ');
  let curr: number = -1;

  for (const l of arr) {
    const num: number = Number(l);

    if (Number.isNaN(num)) continue;

    if (num <= curr) return false;

    curr = num;
  }

  return true;
};

export default areNumbersAscending;
