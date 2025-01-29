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

const averageOfSubtree = (root: TreeNode | null): number => {
  let res = 0;

  const dfs = (node: TreeNode | null): number[] => {
    if (!node) return [0, 0];

    const [leftSum, leftCount] = dfs(node.left);
    const [rightSum, rightCount] = dfs(node.right);

    const sum = leftSum + rightSum + node.val;
    const count = leftCount + rightCount + 1;

    if (Math.floor(sum / count) === node.val) res += 1;

    return [sum, count];
  };

  dfs(root);

  return res;
};

export default averageOfSubtree;
