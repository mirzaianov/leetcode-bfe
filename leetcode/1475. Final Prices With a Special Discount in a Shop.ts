const finalPrices = (prices: number[]): number[] => {
  const res: number[] = [];

  for (let i = 0; i < prices.length - 1; i += 1) {
    const curr: number = prices[i];
    const nextMin: number | undefined = prices.slice(i + 1).find((item) => item <= curr);

    if (nextMin) {
      res.push(curr - nextMin);
    } else {
      res.push(curr);
    }
  }

  res.push(prices.at(-1)!);

  return res;
};

export default finalPrices;
