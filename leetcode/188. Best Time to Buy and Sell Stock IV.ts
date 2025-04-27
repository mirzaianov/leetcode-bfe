const maxProfit = (k: number, prices: number[]): number => {
  let buy: number[] = Array(k).fill(-Infinity);
  let sell: number[] = Array(k + 1).fill(0);

  for (const price of prices) {
    const nextBuy: number[] = Array(k).fill(-Infinity);
    const nextSell: number[] = Array(k + 1).fill(0);

    for (let i = 0; i < k; i += 1) {
      nextBuy[i] = Math.max(buy[i], sell[i] - price);
      nextSell[i + 1] = Math.max(sell[i + 1], buy[i] + price);
    }

    buy = nextBuy;
    sell = nextSell;
  }

  return Math.max(...sell);
};

export default maxProfit;
