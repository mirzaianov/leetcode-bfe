const maxProfit = (prices: number[]): number => {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < prices.length; i += 1) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
};

export default maxProfit;
