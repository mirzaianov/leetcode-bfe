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

class FindElements {
  set: Set<number>;

  constructor(root: TreeNode | null) {
    this.set = new Set<number>();
    this.recover(root, 0);
  }

  find(target: number): boolean {
    return this.set.has(target);
  }

  private recover(node: TreeNode | null, val: number): void {
    if (!node) return;

    this.set.add(val);

    node.val = val;

    this.recover(node.left, 2 * val + 1);
    this.recover(node.right, 2 * val + 2);
  }
}

export default FindElements;
