const totalMoney = (n: number): number => {
  let count = 0;
  let complement = 0;
  let current = 1;

  for (let i = 1; i <= n; i += 1) {
    const add: number = complement + current;

    count += add;
    current += 1;

    if (i % 7 === 0) {
      complement += 1;
      current = 1;
    }
  }

  return count;
};

export default totalMoney;
