const minCostToMoveChips = (position: number[]): number => {
  let odds = 0;
  let evens = 0;

  for (const item of position) {
    item & 1 ? (odds += 1) : (evens += 1);
  }

  return Math.min(odds, evens);
};

export default minCostToMoveChips;
