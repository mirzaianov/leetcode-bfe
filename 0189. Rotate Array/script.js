// const rotate = function (nums, k) {
//     const c = nums.length - 1;

//     for (let i = c; i > c - k; i--) {
//         nums.unshift(nums[c]);
//         // console.log(nums);
//         nums.pop(nums[c]);
//         // console.log(nums);
//     }

//     return nums;
// };

// var rotate = function (nums, k) {
//     for (let i = nums.length - 1; i >= 0; i--) {
//         nums[i + k] = nums[i];
//     }

//     for (let j = k - 1; j >= 0; j--) {
//         nums[j] = nums.pop();
//     }

//     // Time comlexity = O(a + b)
//     return nums;
// };

var rotate = function (nums, k) {
    if (k === 0) {
        return nums;
    }

    const n = nums.length;
    k = k % n;
    const move = n - k;
    const right = nums.splice(move, n);

    nums.unshift(...right);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
// console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
