const buyChoco = (prices: number[], money: number): number => {
  const sortedPrices: number[] = [...prices].sort((a, b) => a - b);
  const sum: number = sortedPrices[0] + sortedPrices[1];

  return sum <= money ? money - sum : money;
};

export default buyChoco;
