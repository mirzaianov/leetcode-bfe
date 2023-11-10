// const validPath = (n, edges, source, destination) => {
//   const graph = new Map();

//   for (const [a, b] of edges) {
//     graph.has(a) ? graph.get(a).push(b) : graph.set(a, [b]);
//     graph.has(b) ? graph.get(b).push(a) : graph.set(b, [a]);
//   }

//   const visited = new Set();

//   const dfs = (c) => {
//     visited.add(c);

//     const current = graph.get(c);

//     if (current && current.length > 0) {
//       for (const e of current) {
//         if (!visited.has(e)) dfs(e);
//       }
//     }
//   };

//   dfs(source);

//   return visited.has(destination);
// };

// #2

const validPath = (n, edges, source, destination) => {
  const buildGraph = (edgesArray) => {
    const newGraph = {};

    for (const [a, b] of edgesArray) {
      newGraph[a] ? newGraph[a].push(b) : (newGraph[a] = [b]);
      newGraph[b] ? newGraph[b].push(a) : (newGraph[b] = [a]);
    }

    return newGraph;
  };

  const myGraph = buildGraph(edges);

  const dfs = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;

    visited.add(src);

    for (const neighbor of graph[src]) {
      if (dfs(graph, neighbor, dst, visited)) return true;
    }

    return false;
  };

  return dfs(myGraph, source, destination, new Set());
};
