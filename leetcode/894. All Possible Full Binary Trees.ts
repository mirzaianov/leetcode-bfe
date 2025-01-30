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

const allPossibleFBT = (n: number): Array<TreeNode | null> => {
  if (n % 2 === 0) return [];
  if (n === 1) return [new TreeNode(0)];

  const res: Array<TreeNode | null> = [];

  for (let i = 1; i < n; i += 2) {
    const left: Array<TreeNode | null> = allPossibleFBT(i);
    const right: Array<TreeNode | null> = allPossibleFBT(n - i - 1);

    for (const l of left) {
      for (const r of right) {
        const root: TreeNode = new TreeNode(0);

        root.left = l;
        root.right = r;
        res.push(root);
      }
    }
  }

  return res;
};

export default allPossibleFBT;
