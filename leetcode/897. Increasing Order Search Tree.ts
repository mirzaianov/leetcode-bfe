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

const increasingBST = (root: TreeNode | null): TreeNode | null => {
  const result: TreeNode = new TreeNode();
  let current: TreeNode = result;

  const dfs = (node: TreeNode | null): void => {
    if (!node) return;

    dfs(node.left);

    current.right = new TreeNode(node.val);
    current = current.right;

    dfs(node.right);
  };

  dfs(root);

  return result.right;
};

export default increasingBST;
