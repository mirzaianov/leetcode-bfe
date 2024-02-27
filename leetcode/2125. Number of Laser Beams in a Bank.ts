const numberOfBeams = (bank: string[]): number => {
  const countLazers = (s: string): number => {
    let count = 0;

    for (const l of s) {
      count += Number(l);
    }

    return count;
  };

  const lazersArray: number[] = [];

  for (const row of bank) {
    const lazers: number = countLazers(row);

    if (lazers > 0) lazersArray.push(lazers);
  }

  if (lazersArray.length < 2) return 0;

  let res = 0;

  for (let i = 1; i < lazersArray.length; i += 1) {
    res += lazersArray[i] * lazersArray[i - 1];
  }

  return res;
};
