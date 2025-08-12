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

const binaryTreePaths = (root: TreeNode | null): string[] => {
  const res: string[] = [];
  const store: string[] = [];

  const backtrack = (node: TreeNode | null): void => {
    if (!node) return;

    store.push(String(node.val));

    if (!node.left && !node.right) res.push(store.join('->'));

    backtrack(node.left);
    backtrack(node.right);

    store.pop();
  };

  backtrack(root);

  return res;
};

export default binaryTreePaths;
