/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const findDuplicateSubtrees = (root: TreeNode | null): Array<TreeNode | null> => {
  const map = new Map<string, TreeNode>();
  const res = new Set<TreeNode>();

  const dfs = (node: TreeNode | null): string => {
    if (!node) return null;

    const key: string = `root: ${node.val}, left: ${dfs(node.left)}, right: ${dfs(node.right)}`;

    if (map.has(key)) {
      res.add(map.get(key));
    } else {
      map.set(key, node);
    }

    return key;
  };

  dfs(root);

  return Array.from(res);
};
