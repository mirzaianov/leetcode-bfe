const minimumCost = (cost: number[]): number => {
  const sorted: number[] = [...cost].sort((a, b) => b - a);
  let res = 0;

  for (let i = 0; i < sorted.length; i += 1) {
    if ((i + 1) % 3 !== 0) res += sorted[i];
  }

  return res;
};

export default minimumCost;
