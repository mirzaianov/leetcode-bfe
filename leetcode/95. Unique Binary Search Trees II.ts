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

// Time complexity: O(4^n / n^(3/2))

const generateTrees = (n: number): Array<TreeNode | null> => {
  const memo = new Map<string, Array<TreeNode | null>>();

  const generate = (start: number, end: number): Array<TreeNode | null> => {
    if (start > end) {
      return [null];
    }

    const key = `${start},${end}`;

    if (memo.has(key)) {
      return memo.get(key) as Array<TreeNode | null>;
    }

    const result: Array<TreeNode | null> = [];

    for (let i = start; i <= end; i += 1) {
      const left = generate(start, i - 1);
      const right = generate(i + 1, end);

      for (const l of left) {
        for (const r of right) {
          const root = new TreeNode(i);

          root.left = l;
          root.right = r;
          result.push(root);
        }
      }
    }

    memo.set(key, result);

    return result;
  };

  return generate(1, n);
};

export default generateTrees;
