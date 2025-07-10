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

const isCousins = (root: TreeNode | null, x: number, y: number): boolean => {
  const parentMap: Record<string, TreeNode | null> = {};
  const levelMap: Record<string, number> = {};

  function dfs(node: TreeNode | null, parent: TreeNode | null, level: number): void {
    if (!node) return;

    parentMap[node.val] = parent;
    levelMap[node.val] = level;

    dfs(node.left, node, level + 1);
    dfs(node.right, node, level + 1);
  }

  dfs(root, null, 0);

  return levelMap[x] === levelMap[y] && parentMap[x] !== parentMap[y];
};

export default isCousins;
