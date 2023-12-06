const distributeCandies = (candyType) => {
  const set = new Set(candyType);
  const len = candyType.length;

  return Math.min(set.size, len / 2);
};
