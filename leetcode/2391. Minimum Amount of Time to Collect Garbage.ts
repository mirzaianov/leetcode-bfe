const garbageCollection = (garbage: string[], travel: number[]): number => {
  let count = 0;

  for (const item of garbage) {
    count += item.length;
  }

  let m = 0;
  let p = 0;
  let g = 0;

  for (let i = travel.length; i > 0; i -= 1) {
    m = m || garbage[i].includes('M') ? 1 : 0;
    p = p || garbage[i].includes('P') ? 1 : 0;
    g = g || garbage[i].includes('G') ? 1 : 0;

    count += travel[i - 1] * (m + p + g);
  }

  return count;
};

export default garbageCollection;
