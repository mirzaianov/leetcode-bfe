const buyChoco = (prices, money) => {
  const sortPrices = prices.sort((a, b) => a - b);
  const ans = money - sortPrices[0] - sortPrices[1];

  return ans >= 0 ? ans : money;
};
