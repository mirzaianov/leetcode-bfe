// Definition for a binary tree node.
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

const levelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];

  const res: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const len: number = queue.length;
    const row: number[] = [];

    for (let i = 0; i < len; i += 1) {
      const current = queue.shift()!;

      row.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    res.push(row);
  }

  return res;
};

export default levelOrder;
