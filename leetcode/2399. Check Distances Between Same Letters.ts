const checkDistances = (s: string, distance: number[]): boolean => {
  const map = new Map<number, number>();

  for (let i = 0; i < s.length; i += 1) {
    const curr: number = s[i].charCodeAt(0) - 97;

    if (!map.has(curr)) {
      map.set(curr, i);
    } else {
      const value: number | undefined = map.get(curr);

      if (value !== undefined) {
        map.set(curr, i - value - 1);
      }
    }
  }

  for (const [key, value] of map) {
    if (value !== distance[key]) return false;
  }

  return true;
};

export default checkDistances;
