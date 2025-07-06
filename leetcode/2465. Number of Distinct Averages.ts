const distinctAverages = (nums: number[]): number => {
  const sorted: number[] = [...nums].sort((a, b) => a - b);
  const set = new Set<number>();

  while (sorted.length > 0) {
    const min: number | undefined = sorted.shift();
    const max: number | undefined = sorted.pop();

    if (min !== undefined && max !== undefined) set.add((min + max) / 2);
  }

  return set.size;
};

export default distinctAverages;
