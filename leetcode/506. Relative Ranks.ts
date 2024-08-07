const findRelativeRanks = (score: number[]): string[] => {
  const orderedScore: number[] = [...score].sort((a, b) => b - a);
  const map = new Map<number, string>();
  const res: string[] = [];

  for (let i = 0; i < orderedScore.length; i += 1) {
    if (i === 0) map.set(orderedScore[i], 'Gold Medal');
    else if (i === 1) map.set(orderedScore[i], 'Silver Medal');
    else if (i === 2) map.set(orderedScore[i], 'Bronze Medal');
    else map.set(orderedScore[i], String(i + 1));
  }

  for (const item of score) res.push(map.get(item)!);

  return res;
};

export default findRelativeRanks;
