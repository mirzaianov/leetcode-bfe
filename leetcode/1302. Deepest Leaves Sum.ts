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

const deepestLeavesSum = (root: TreeNode | null): number => {
  if (!root) return 0;

  const queue: TreeNode[] = [root];
  let res = 0;

  while (queue.length) {
    const len: number = queue.length;
    res = 0;

    for (let i = 0; i < len; i += 1) {
      const curr: TreeNode | undefined = queue.shift();

      if (curr) {
        res += curr.val;

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    }
  }

  return res;
};

export default deepestLeavesSum;
