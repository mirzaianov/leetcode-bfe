class _Node {
  val: number;

  children: _Node[];

  constructor(val?: number, children?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

const maxDepth = (root: _Node | null): number => {
  if (!root) return 0;

  let max = 0;

  for (const child of root.children) {
    max = Math.max(max, maxDepth(child));
  }

  return max + 1;
};

export default maxDepth;
