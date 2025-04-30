const minCosts = (cost: number[]): number[] => {
  if (cost.length < 2) return cost;

  const line: number[] = [...cost];

  for (let i = 1; i < line.length; i += 1) {
    if (line[i - 1] < line[i]) {
      line[i] = line[i - 1];
    }
  }

  return line;
};

export default minCosts;
