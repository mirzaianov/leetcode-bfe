const winningPlayerCount = (n: number, pick: number[][]): number => {
  const map = new Map<number, Map<number, number>>();

  for (const [x, y] of pick) {
    if (!map.has(x)) {
      const newMap = new Map<number, number>();

      newMap.set(y, 1);

      map.set(x, newMap);
    } else {
      const mapVal: Map<number, number> | undefined = map.get(x);

      if (mapVal !== undefined) {
        mapVal.set(y, (mapVal.get(y) || 0) + 1);
        map.set(x, mapVal);
      }
    }
  }

  let count = 0;

  for (let i = 0; i < n; i += 1) {
    if (map.has(i)) {
      const mapVal: Map<number, number> | undefined = map.get(i);

      if (mapVal !== undefined) {
        const isValid: boolean = [...mapVal.values()].some((item) => item > i);

        if (isValid) count += 1;
      }
    }
  }

  return count;
};

export default winningPlayerCount;
