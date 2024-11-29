const countPoints = (rings: string): number => {
  const map = new Map<string, Set<string>>();

  for (let i = 0; i < rings.length; i += 2) {
    const color: string = rings[i];
    const bar: string = rings[i + 1];

    if (map.get(bar)) {
      map.set(bar, map.get(bar)!.add(color));
    } else {
      map.set(bar, new Set<string>(color));
    }
  }

  let count = 0;

  for (const [, value] of map) {
    if (value.size === 3) count += 1;
  }

  return count;
};

export default countPoints;
