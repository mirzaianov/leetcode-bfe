// const merge = function (nums1, m, nums2, n) {
//     nums1.splice(m);
//     nums1.push(...nums2);
//     nums1.sort((a, b) => a - b);

//     return nums1;
// };

// #2

const merge = function (nums1, m, nums2, n) {
    const divideIndex = nums1.length - n;

    nums1.splice(divideIndex, n);
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1, 2, 2, 3, 5, 6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]
console.log(merge([2, 0], 1, [1], 1)); // [1, 2]
console.log(merge([1, 2, 4, 5, 6, 0], 5, [3], 1)); // [1, 2, 3, 4, 5, 6]
