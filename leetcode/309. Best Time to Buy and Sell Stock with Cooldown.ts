const maxProfit = (prices: number[]): number => {
  let now = 0;
  let buy = Infinity;
  let free = 0;
  let last = 0;

  for (const price of prices) {
    now = Math.max(last, price - buy);
    buy = Math.min(buy, price - free);

    free = last;
    last = now;
  }

  return now;
};

export default maxProfit;
