class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirstValues = (root) => {
  // if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();

    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
};

// const depthFirstValues = (root) => {
//   if (root === null) return [];

//   const leftValues = depthFirstValues(root.left);
//   const rightValues = depthFirstValues(root.right);

//   return [root.val, ...leftValues, ...rightValues];
// };

console.log(depthFirstValues(a));

const breadthFirstValues = (root) => {
  // if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    result.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return result;
};

console.log(breadthFirstValues(a));

const treeIncludes = (root, target) => {
  // if (!root) return false;

  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    if (current.val === target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
};

// const treeIncludes = (root, target) => {
//   if (!root) return false;
//   if (root.val === target) return true;

//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };

console.log(treeIncludes(a, 'j'));

const g = new Node(3);
const h = new Node(11);
const i = new Node(4);
const j = new Node(4);
const k = new Node(2);
const l = new Node(1);

g.left = h;
g.right = i;
h.left = j;
h.right = k;
i.right = l;

// const treeSum = (root) => {
//   if (!root) return 0;

//   return root.val + treeSum(root.left) + treeSum(root.right);
// };

const treeSum = (root) => {
  // if (!root) return 0;

  let result = 0;
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    result += current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return result;
};

console.log(treeSum(g));

const m = new Node(5);
const n = new Node(11);
const o = new Node(3);
const p = new Node(4);
const q = new Node(15);
const r = new Node(12);

m.left = n;
m.right = o;
n.left = p;
n.right = q;
o.right = r;

// const treeMinValue = (root) => {
//   if (!root) return Infinity;

//   return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
// };

const treeMinValue = (root) => {
  // if (!root) return Infinity;

  let result = Infinity;
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    result = Math.min(result, current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return result;
};

console.log(treeMinValue(m));

const s = new Node(5);
const t = new Node(11);
const u = new Node(3);
const v = new Node(4);
const w = new Node(2);
const x = new Node(1);

s.left = t;
s.right = u;
t.left = v;
t.right = w;
u.right = x;

const maxPathSum = (root) => {
  if (!root) return -Infinity;

  if (!root.left && !root.right) return root.val;

  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

console.log(maxPathSum(s));
