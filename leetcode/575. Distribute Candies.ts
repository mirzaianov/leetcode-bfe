const distributeCandies = (candyType: number[]): number => {
  const len: number = candyType.length / 2;
  const types: number = new Set(candyType).size;

  return Math.min(len, types);
};

export default distributeCandies;
