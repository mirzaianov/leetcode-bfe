const allPathsSourceTarget = (graph: number[][]): number[][] => {
  const target: number = graph.length - 1;
  const res: number[][] = [];

  const dfs = (val: number, path: number[]): void => {
    path.push(val);

    if (val === target) {
      res.push(path);

      return;
    }

    for (const edge of graph[val]) {
      dfs(edge, [...path]);
    }
  };

  dfs(0, []);

  return res;
};

export default allPathsSourceTarget;
