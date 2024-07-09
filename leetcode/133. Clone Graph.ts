class _Node {
  val: number;

  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

const bfs = (node: _Node | null, map: Map<_Node, _Node>): _Node | null => {
  if (node == null) return null;

  if (map.has(node)) return map.get(node)!;

  const newNode = new _Node(node.val);

  map.set(node, newNode);

  for (let i = 0; i < node.neighbors.length; i += 1) {
    newNode.neighbors.push(bfs(node.neighbors[i], map)!);
  }

  return newNode;
};

const cloneGraph = (node: _Node | null): _Node | null => {
  const map = new Map<_Node, _Node>();

  return bfs(node, map);
};

export default cloneGraph;
