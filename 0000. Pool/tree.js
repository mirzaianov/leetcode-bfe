class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (root) => {
  if (root === null) return [];

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
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

const breadthFirstValues = (root) => {
  if (root === null) return [];

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    values.push(current.val);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return values;
};

// const treeIncludes = (root, target) => {
//   if (root === null) return false;

//   const queue = [root];

//   while (queue.length > 0) {
//     const current = queue.shift();

//     if (current.val === target) return true;

//     if (current.left !== null) queue.push(current.left);
//     if (current.right !== null) queue.push(current.right);
//   }

//   return false;
// };

const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;

  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

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

console.log(depthFirstValues(a));
console.log(breadthFirstValues(a));
console.log(treeIncludes(a, 'j'));
