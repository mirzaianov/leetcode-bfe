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

const getLeaves = (head: TreeNode | null): number[] => {
  if (!head) return [];

  const res: number[] = [];

  const dfs = (node: TreeNode | null): void => {
    if (!node) return;

    if (!node.left && !node.right) res.push(node.val);

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  };

  dfs(head);

  return res;
};

const leafSimilar = (root1: TreeNode | null, root2: TreeNode | null): boolean => {
  const nums1: number[] = getLeaves(root1);
  const nums2: number[] = getLeaves(root2);

  if (nums1.length !== nums2.length) return false;

  for (let i = 0; i < nums1.length; i += 1) {
    if (nums1[i] !== nums2[i]) return false;
  }

  return true;
};

export default leafSimilar;
