class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const createBinaryTree = (descriptions: number[][]): TreeNode | null => {
  const set = new Set<number>();
  const map = new Map<number, TreeNode>();

  for (const [parent, child, isLeft] of descriptions) {
    set.add(child);

    const parentNode: TreeNode = map.get(parent) ?? new TreeNode(parent);
    const childNode: TreeNode = map.get(child) ?? new TreeNode(child);

    isLeft ? (parentNode.left = childNode) : (parentNode.right = childNode);

    map.set(parent, parentNode);
    map.set(child, childNode);
  }

  for (const [p, ,] of descriptions) {
    if (!set.has(p)) {
      const rootNode: TreeNode | null = map.get(p) || null;

      return rootNode;
    }
  }

  return null;
};

export default createBinaryTree;
