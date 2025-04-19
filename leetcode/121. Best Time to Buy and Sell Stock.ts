const maxProfit = (prices: number[]): number => {
  let min = Infinity;
  let max = -Infinity;

  for (const price of prices) {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  }

  return max;
};

export default maxProfit;
