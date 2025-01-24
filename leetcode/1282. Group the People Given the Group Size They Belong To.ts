const groupThePeople = (groupSizes: number[]): number[][] => {
  const res: number[][] = [];
  const map = new Map<number, number[]>();

  for (let i = 0; i < groupSizes.length; i += 1) {
    const curr: number = groupSizes[i];

    if (!map.has(curr)) map.set(curr, []);

    const group = map.get(curr);

    if (group) {
      group.push(i);

      if (group.length === curr) {
        res.push([...group]);
        map.set(curr, []);
      }
    }
  }

  return res;
};

export default groupThePeople;
