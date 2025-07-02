const fillCups = (amount: number[]): number => {
  amount.sort((a, b) => b - a);

  let time = 0;

  while (amount[0] > 0) {
    if (amount[0] > 0 && amount[1] > 0) amount[1] -= 1;

    amount[0] -= 1;
    time += 1;
    amount.sort((a, b) => b - a);
  }

  return time;
};

export default fillCups;
