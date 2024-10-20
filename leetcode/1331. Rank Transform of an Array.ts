const arrayRankTransform = (arr: number[]): number[] => {
  if (!arr.length) return [];

  const set = new Set<number>(arr);
  const sorted: number[] = [...set].sort((a, b) => a - b);
  const map = new Map<number, number>();

  for (let i = 0; i < sorted.length; i += 1) map.set(sorted[i], i + 1);

  const res: number[] = [];

  for (const item of arr) res.push(map.get(item)!);

  return res;
};

export default arrayRankTransform;
