// const findDuplicate = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) return nums[i];
//         }
//     }
// };

// #2

// const findDuplicate = function (nums) {
//     let slow = 0,
//         fast = 0,
//         check = 0;

//     while (true) {
//         slow = nums[slow];
//         fast = nums[nums[fast]];

//         if (slow === fast) {
//             break;
//         }
//     }

//     while (true) {
//         slow = nums[slow];
//         check = nums[check];

//         if (slow === check) {
//             break;
//         }
//     }

//     return check;
// };

// #3

// const findDuplicate = function (nums) {
//     let slow = 0,
//         fast = 0,
//         check = 0;

//     while (true) {
//         slow = nums[slow];
//         fast = nums[nums[fast]];

//         if (slow === fast) break;
//     }

//     while (true) {
//         slow = nums[slow];
//         check = nums[check];

//         if (slow === check) break;
//     }

//     return check;
// };

// #4

const findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) break;
  }

  slow = nums[0];

  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

// console.log(findDuplicate([1, 1, 2, 3, 4, 5])); // 1
// console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
// console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
console.log(findDuplicate([1, 2, 3, 4, 4])); // 4
// console.log(findDuplicate([1, 2, 3, 4, 5, 6]));
console.log(findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1])); // 9
