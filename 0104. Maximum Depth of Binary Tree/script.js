// const maxDepth = function (root) {
//     let result = 0,
//         number = root.length;

//     while (number > 1) {
//         number = number / 2;
//         result++;
//     }

//     return result;
// };

const maxDepth = function (root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7])); // 3
console.log(maxDepth([1, null, 2])); // 2
