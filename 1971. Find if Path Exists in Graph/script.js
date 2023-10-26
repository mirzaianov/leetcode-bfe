const validPath = (n, edges, source, destination) => {
  const graph = new Map();

  for (const [a, b] of edges) {
    graph.has(a) ? graph.get(a).push(b) : graph.set(a, [b]);
    graph.has(b) ? graph.get(b).push(a) : graph.set(b, [a]);
  }

  const visited = new Set();

  const dfs = (c) => {
    visited.add(c);

    const current = graph.get(c);

    if (current && current.length > 0) {
      for (const e of current) {
        if (!visited.has(e)) dfs(e);
      }
    }
  };

  dfs(source);

  return visited.has(destination);
};
