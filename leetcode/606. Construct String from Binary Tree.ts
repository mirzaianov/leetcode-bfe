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

const tree2str = (root: TreeNode | null): string => {
  if (!root) return '';

  const left: string = tree2str(root.left);
  const right: string = tree2str(root.right);

  return root.val + (left || right ? `(${left})` : '') + (right ? `(${right})` : '');
};

export default tree2str;
