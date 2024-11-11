const countMatches = (items: string[][], ruleKey: string, ruleValue: string): number => {
  const map = new Map<string, number>([
    ['type', 0],
    ['color', 1],
    ['name', 2],
  ]);
  let count = 0;

  for (const item of items) {
    const value: number | undefined = map.get(ruleKey);

    if (value !== undefined && item[value] === ruleValue) count += 1;
  }

  return count;
};

export default countMatches;
