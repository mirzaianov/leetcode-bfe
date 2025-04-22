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

const findTarget = (root: TreeNode | null, k: number): boolean => {
  const set = new Set<number>();

  const dfs = (node: TreeNode | null): boolean => {
    if (!node) return false;

    if (set.has(k - node.val)) return true;

    set.add(node.val);

    return dfs(node.left) || dfs(node.right);
  };

  return dfs(root);
};

export default findTarget;
