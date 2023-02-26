const intersect = function (nums1, nums2) {
    obj = {};
    result = [];

    for (let i of nums1) {
        obj[i] = obj[i] ? obj[i] + 1 : 1;
    }

    for (let i of nums2) {
        if (obj[i]) {
            obj[i]--;
            result.push(i);
        }
    }

    return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
console.log(intersect([1, 1], [1, 2])); // [1]
