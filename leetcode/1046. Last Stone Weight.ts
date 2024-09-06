const returnMaxValue = (arr: number[]): number => {
  const maxVal: number = Math.max(...arr);
  const maxIdx: number = arr.indexOf(maxVal);

  return arr.splice(maxIdx, 1)[0];
};

const lastStoneWeight = (stones: number[]): number => {
  if (!stones.length) return 0;

  if (stones.length === 1) return stones[0];

  while (stones.length > 1) {
    const max: number = returnMaxValue(stones);
    const prev: number = returnMaxValue(stones);

    if (max !== prev) {
      stones.push(max - prev);
    }
  }

  return stones.length ? stones[0] : 0;
};

export default lastStoneWeight;
