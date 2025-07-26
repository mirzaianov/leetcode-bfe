const numTilePossibilities = (tiles: string): number => {
  const map = new Map<string, number>();

  for (const t of tiles) {
    map.set(t, (map.get(t) || 0) + 1);
  }

  const backtrack = (): number => {
    let count = 0;

    for (const [key, value] of map) {
      if (value > 0) {
        map.set(key, value - 1);
        count += 1;
        count += backtrack();
        map.set(key, value);
      }
    }

    return count;
  };

  return backtrack();
};

export default numTilePossibilities;
