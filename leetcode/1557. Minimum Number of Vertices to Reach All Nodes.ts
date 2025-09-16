const findSmallestSetOfVertices = (n: number, edges: number[][]): number[] => {
  const set = new Set<number>();

  for (const [, e] of edges) {
    set.add(e);
  }

  const res: number[] = [];

  for (let i = 0; i < n; i += 1) {
    if (!set.has(i)) res.push(i);
  }

  return res;
};

export default findSmallestSetOfVertices;
