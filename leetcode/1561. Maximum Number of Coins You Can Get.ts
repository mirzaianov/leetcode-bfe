const maxCoins = (piles: number[]): number => {
  const len: number = (piles.length / 3) * 2;
  const sorted: number[] = piles.sort((a, b) => b - a);
  let count = 0;

  for (let i = 1; i < len; i += 2) {
    count += sorted[i];
  }

  return count;
};

export default maxCoins;
