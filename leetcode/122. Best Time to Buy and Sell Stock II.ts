const maxProfit = (prices: number[]): number => {
  let buy = -Infinity;
  let sell = 0;

  for (const price of prices) {
    buy = Math.max(buy, sell - price);
    sell = Math.max(sell, buy + price);
  }

  return sell;
};

export default maxProfit;
