const validPath = (n: number, edges: number[][], source: number, destination: number): boolean => {
  const map = new Map<number, number>();

  for (let i = 0; i < n; i += 1) {
    map.set(i, i);
  }

  const nodeRoot = (r: number): number => {
    if (r === map.get(r)) return r;

    map.set(r, nodeRoot(map.get(r)!));

    return map.get(r)!;
  };

  const makeNode = (s: number, e: number): void => {
    map.set(nodeRoot(s), nodeRoot(e));
  };

  for (const [k, v] of edges) {
    makeNode(k, v);
  }

  return nodeRoot(source) === nodeRoot(destination);
};

export default validPath;
