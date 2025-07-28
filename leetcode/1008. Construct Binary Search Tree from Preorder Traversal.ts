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

const bstFromPreorder = (preorder: number[]): TreeNode | null => {
  if (preorder.length === 0) return null;

  let point = 1;

  while (preorder[0] > preorder[point]) {
    point += 1;
  }

  return new TreeNode(
    preorder[0],
    bstFromPreorder(preorder.slice(1, point)),
    bstFromPreorder(preorder.slice(point)),
  );
};

export default bstFromPreorder;
