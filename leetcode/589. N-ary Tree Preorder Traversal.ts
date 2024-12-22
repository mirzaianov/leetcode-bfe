class _Node {
  val: number;

  children: _Node[];

  constructor(val?: number, children?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

// const preorder = (root: _Node | null): number[] => {
//   if (!root) return [];

//   const res: number[] = [];
//   const stack: _Node[] = [root];

//   while (stack.length) {
//     const curr: _Node = stack.pop()!;

//     res.push(curr.val);

//     const len: number = curr.children.length;

//     for (let i = len - 1; i >= 0; i -= 1) {
//       stack.push(curr.children[i]);
//     }
//   }

//   return res;
// };

const preorder = (root: _Node | null): number[] => {
  const res: number[] = [];

  const dfs = (node: _Node | null): void => {
    if (!node) return;

    res.push(node.val);

    for (const child of node.children) {
      dfs(child);
    }
  };

  dfs(root);

  return res;
};

export default preorder;
