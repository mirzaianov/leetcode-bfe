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

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  const createBST = (left: number, right: number): TreeNode | null => {
    if (left > right) return null;

    const mid: number = left + Math.floor((right - left) / 2);
    const node: TreeNode = new TreeNode(nums[mid]);

    node.left = createBST(left, mid - 1);
    node.right = createBST(mid + 1, right);

    return node;
  };

  return createBST(0, nums.length - 1);
};

export default sortedArrayToBST;
