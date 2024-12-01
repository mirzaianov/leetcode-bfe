const sortPeople = (names: string[], heights: number[]): string[] => {
  const merged: [string, number][] = [];

  for (let i = 0; i < names.length; i += 1) {
    merged.push([names[i], heights[i]]);
  }

  merged.sort((a, b) => b[1] - a[1]);

  return merged.map(([name]) => name);
};

export default sortPeople;
