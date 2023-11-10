const findSubsequences = function (nums) {
    let result = [];
    let map = {};

    iterateFun(0, []);
    return result;

    function iterateFun(index, temp) {
        if (map[temp]) {
            return;
        }
        if (temp.length >= 2) {
            result.push(temp);
        }
        for (let i = index; i < nums.length; i++) {
            if (temp[temp.length - 1] > nums[i]) {
                continue;
            }
            map[temp] = true;
            iterateFun(i + 1, [...temp, nums[i]]);
        }
    }
};

// [[4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7], [4, 7, 7], [6, 7], [6, 7, 7], [7, 7]]
console.log(findSubsequences([4, 6, 7, 7]));
console.log(findSubsequences([4, 4, 3, 2, 1])); // [4, 4]
