class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const getLonelyNodes = (root: TreeNode): number[] => {
  const res: number[] = [];

  const dfs = (node: TreeNode | null): TreeNode | null => {
    if (!node) return null;

    if (!node.left && node.right) res.push(node.right.val);
    if (!node.right && node.left) res.push(node.left.val);

    return dfs(node.left) || dfs(node.right);
  };

  dfs(root);

  return res;
};

export default getLonelyNodes;
