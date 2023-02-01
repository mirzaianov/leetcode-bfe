const frequencySort = function (nums) {
    const map = new Map();
    for (let n of nums) {
        map.set(n, map.get(n) + 1 || 1);
    }
    return nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
};

console.log(frequencySort([1, 1, 2, 2, 2, 3])); // [3, 1, 1, 2, 2, 2]
console.log(frequencySort([2, 3, 1, 3, 2])); // [1, 3, 3, 2, 2]
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])); // [5, -1, 4, 4, -6, -6, 1, 1, 1]
