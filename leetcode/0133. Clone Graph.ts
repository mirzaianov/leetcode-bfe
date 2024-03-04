class Node {
  val: number;

  neighbors: Node[];

  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

const bfs = (node: Node | null, map: Map<Node, Node>): Node | null => {
  if (node == null) return null;

  if (map.has(node)) return map.get(node)!;

  const newNode = new Node(node.val);

  map.set(node, newNode);

  for (let i = 0; i < node.neighbors.length; i += 1) {
    newNode.neighbors.push(bfs(node.neighbors[i], map));
  }

  return newNode;
};

const cloneGraph = (node: Node | null): Node | null => {
  const map = new Map<Node, Node>();

  return bfs(node, map);
};
