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
