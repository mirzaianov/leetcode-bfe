const toMap = (ranks: number[]): Map<number, number> => {
  const map = new Map<number, number>();

  for (const rank of ranks) {
    map.set(rank, (map.get(rank) || 0) + 1);
  }

  return map;
};

const bestHand = (ranks: number[], suits: string[]): string => {
  const rankValues: number[] = [...toMap(ranks).values()];
  const set = new Set<string>(suits);

  if (set.size === 1) return 'Flush';

  if (rankValues.some((val) => val > 2)) return 'Three of a Kind';

  if (rankValues.includes(2)) return 'Pair';

  return 'High Card';
};

export default bestHand;
