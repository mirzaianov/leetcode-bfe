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

const sumRootToLeaf = (root: TreeNode | null): number => {
  const arr: string[] = [];

  const dfs = (node: TreeNode | null, string: string): boolean => {
    if (!node) return false;

    const str: string = `${string}${node.val}`;

    if (!node.left && !node.right) arr.push(str);

    return dfs(node.left, str) || dfs(node.right, str);
  };

  dfs(root, '');

  return arr.reduce((acc: number, item: string) => acc + parseInt(item, 2), 0);
};

export default sumRootToLeaf;
