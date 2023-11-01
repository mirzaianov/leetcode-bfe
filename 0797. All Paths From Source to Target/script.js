const allPathsSourceTarget = (graph) => {
  const target = graph.length - 1;
  const res = [];

  const dfs = (node, path) => {
    path.push(node);

    if (node === target) {
      res.push(path);
      return;
    }

    for (const edge of graph[node]) {
      dfs(edge, [...path]);
    }
  };

  dfs(0, []);

  return res;
};
