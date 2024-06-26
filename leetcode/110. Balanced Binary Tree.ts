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

const dfs = (head: TreeNode | null): [boolean, number] => {
  if (!head) return [true, 0];

  const left: [boolean, number] = dfs(head.left);
  const right: [boolean, number] = dfs(head.right);
  const balanced: boolean = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

  return [balanced, 1 + Math.max(left[1], right[1])];
};

const isBalanced = (root: TreeNode | null): boolean => dfs(root)[0];

export default isBalanced;
