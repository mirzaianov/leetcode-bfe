// const majorityElement = function (nums) {
//     const myObj = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (myObj[nums[i]]) {
//             myObj[nums[i]]++;
//         } else {
//             myObj[nums[i]] = 1;
//         }
//     }

//     for (let i = 0; i < myObj.length; i++) {
//         if (myObj[i] > nums.length / 2) {
//             return i;
//         }
//     }

//     return 0;
// };

const majorityElement = function (nums) {
    let map = {};
    const maxVal = nums.length / 2;

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;

        if (map[nums[i]] > maxVal) {
            return nums[i];
        }
    }
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
