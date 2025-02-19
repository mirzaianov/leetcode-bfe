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

const averageOfLevels = (root: TreeNode | null): number[] => {
  const res: number[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    const len: number = queue.length;
    let sum: number = 0;

    for (let i = 0; i < len; i += 1) {
      const curr: TreeNode | undefined | null = queue.shift();

      if (curr) {
        sum += curr.val;

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    }

    res.push(sum / len);
  }

  return res;
};

export default averageOfLevels;
