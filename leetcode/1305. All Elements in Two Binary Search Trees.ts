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

const getValues = (root: TreeNode | null): number[] => {
  const res: number[] = [];

  const dfs = (node: TreeNode | null): void => {
    if (!node) return;

    if (node.left) dfs(node.left);

    res.push(node.val);

    if (node.right) dfs(node.right);
  };

  dfs(root);

  return res;
};

const getAllElements = (root1: TreeNode | null, root2: TreeNode | null): number[] => {
  const values1: number[] = getValues(root1);
  const values2: number[] = getValues(root2);

  return [...values1, ...values2].sort((a, b) => a - b);
};

export default getAllElements;
