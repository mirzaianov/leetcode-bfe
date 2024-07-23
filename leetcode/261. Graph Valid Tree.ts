const validTree = (n: number, edges: number[][]): boolean => {
  if (!n) return true;

  if (!edges.length && n === 1) return true;

  if (!edges.length) return false;

  const map = new Map<number, number[]>();

  for (const [n1, n2] of edges) {
    map.set(n1, map.has(n1) ? [...map.get(n1)!, n2] : [n2]);
    map.set(n2, map.has(n2) ? [...map.get(n2)!, n1] : [n1]);
  }

  const set = new Set<number>();

  const dfs = (i: number, prev: number) => {
    if (set.has(i)) return false;

    set.add(i);

    for (const j of map.get(i)!) {
      if (j === prev) continue;

      if (!dfs(j, i)) return false;
    }

    return true;
  };

  return dfs(0, -1) && n === set.size;
};

export default validTree;
