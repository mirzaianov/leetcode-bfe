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

  const dfs = (node: TreeNode | null): void => {
    if (!node) return;

    store.push(String(node.val));

    if (!node.left && !node.right) res.push(store.join('->'));

    dfs(node.left);
    dfs(node.right);

    store.pop();
  };

  dfs(root);

  return res;
};

export default binaryTreePaths;
