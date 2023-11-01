const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

// const depthFirstPrint = (graph, source) => {
//   const stack = [source];

//   while (stack.length) {
//     const current = stack.pop();
//     console.log(current);

//     for (const neighbor of graph[current]) {
//       stack.push(neighbor);
//     }
//   }
// };

const depthFirstPrint = (graph, source) => {
  console.log(source);

  for (const neighbor of graph[source]) {
    depthFirstPrint(graph, neighbor);
  }
};

depthFirstPrint(graph, 'a'); // acebdf || abdfce

const breadthFirstPrint = (graph, source) => {
  const queue = [source];

  while (queue.length) {
    const current = queue.shift();
    console.log(current);

    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

breadthFirstPrint(graph, 'a'); // acbedf || abcdef

// has path NOTE: (no cyclic case)

// const hasPath = (graph, src, dst) => {
//   if (src === dst) return true;

//   for (const neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst) === true) return true;
//   }

//   return false;
// };

const hasPath = (graph, src, dst) => {
  const queue = [src];

  while (queue.length) {
    const current = queue.shift();

    if (current === dst) return true;

    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

console.log(hasPath(graph, 'a', 'f')); // true

// undirected path

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

const buildGraph = (edges) => {
  const graph = {};

  for (const [a, b] of edges) {
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
    graph[b] ? graph[b].push(a) : (graph[b] = [a]);
  }

  return graph;
};

const hasPath2 = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (const neighbor of graph[src]) {
    if (hasPath2(graph, neighbor, dst, visited) === true) return true;
  }

  return false;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  return hasPath2(graph, nodeA, nodeB, new Set());
};

console.log(undirectedPath(edges, 'i', 'o'));

// connected component count

const graph2 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const explore = (graph, node, visited) => {
  if (visited.has(String(node))) return false;

  visited.add(String(node));

  for (const neighbor of graph[node]) {
    explore(graph, neighbor, visited);
  }

  return true;
};

const connectedComponentCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (const node in graph) {
    if (explore(graph, node, visited) === true) count += 1;
  }

  return count;
};

console.log(connectedComponentCount(graph2)); // 2
