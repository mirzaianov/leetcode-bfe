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
    if (hasPath2(graph, neighbor, dst, visited)) return true;
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
    if (explore(graph, node, visited)) count += 1;
  }

  return count;
};

console.log(connectedComponentCount(graph2)); // 2

// largest component

const graph3 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;

  visited.add(String(node));

  let size = 1;

  for (const neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
};

const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;

  for (const node in graph) {
    const size = exploreSize(graph, node, visited);

    if (size > longest) longest = size;
  }

  return longest;
};

console.log(largestComponent(graph3)); // 4

// shortest path

const edges2 = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

const buildGraph2 = (edges) => {
  const graph = {};

  for (const [a, b] of edges) {
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
    graph[b] ? graph[b].push(a) : (graph[b] = [a]);
  }

  return graph;
};

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph2(edges);
  const visited = new Set([nodeA]);
  const queue = [[nodeA, 0]];

  while (queue.length) {
    const [node, distance] = queue.shift();

    if (node === nodeB) return distance;

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
};

console.log(shortestPath(edges2, 'w', 'z')); // 2

// island count

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

const exploreCount = (grid, r, c, visited) => {
  const rowInbounds = r >= 0 && r < grid.length;
  const colInbounds = c >= 0 && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === 'W') return false;

  const pos = `${r},${c}`;

  if (visited.has(pos)) return false;

  visited.add(pos);

  exploreCount(grid, r - 1, c, visited);
  exploreCount(grid, r + 1, c, visited);
  exploreCount(grid, r, c - 1, visited);
  exploreCount(grid, r, c + 1, visited);

  return true;
};

const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;

  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (exploreCount(grid, r, c, visited)) count += 1;
    }
  }

  return count;
};

console.log(islandCount(grid)); // 3

// minimum island

const exploreMin = (grid, r, c, visited) => {
  const rowInbounds = r >= 0 && r < grid.length;
  const colInbounds = c >= 0 && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return 0;

  if (grid[r][c] === 'W') return 0;

  const pos = `${r},${c}`;

  if (visited.has(pos)) return 0;

  visited.add(pos);

  let size = 1;

  size += exploreMin(grid, r - 1, c, visited);
  size += exploreMin(grid, r + 1, c, visited);
  size += exploreMin(grid, r, c - 1, visited);
  size += exploreMin(grid, r, c + 1, visited);

  return size;
};

const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;

  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const size = exploreMin(grid, r, c, visited);

      if (size && size < minSize) minSize = size;
    }
  }

  return minSize;
};

console.log(minimumIsland(grid)); // 2
