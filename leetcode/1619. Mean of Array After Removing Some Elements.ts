const trimMean = (arr: number[], range: number = 5): number => {
  const target: number = Math.ceil((arr.length * range) / 100);
  const copy: number[] = [...arr].sort((a, b) => a - b).slice(target, arr.length - target);
  const len: number = copy.length;
  const sum: number = copy.reduce((acc, item) => acc + item, 0);

  return sum / len;
};

export default trimMean;
