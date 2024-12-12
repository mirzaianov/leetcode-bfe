class _Node {
  val: number;

  children: _Node[];

  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

// const postorder = (root: _Node | null): number[] => {
//   if (!root) return [];

//   const res: number[] = [];
//   const stack: _Node[] = [root];

//   while (stack.length) {
//     const curr: _Node = stack.pop();

//     res.unshift(curr.val);

//     for (const child of curr.children) {
//       stack.push(child);
//     }
//   }

//   return res;
// };

const postorder = (root: _Node | null): number[] => {
  const res: number[] = [];

  const dfs = (node: _Node | null): void => {
    if (!node) return;

    for (const child of node.children) {
      dfs(child);
    }

    res.push(node.val);
  };

  dfs(root);

  return res;
};

export default postorder;
