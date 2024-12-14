const destCity = (paths: string[][]): string => {
  const set0 = new Set<string>();
  const set1 = new Set<string>();

  for (const [p0, p1] of paths) {
    set1.has(p0) ? set1.delete(p0) : set0.add(p0);
    set0.has(p1) ? set0.delete(p1) : set1.add(p1);
  }

  return [...set1][0];
};

export default destCity;
