// const nextGreatestLetter = function (letters, target) {
//     if (letters.find((item) => item > target)) return letters.find((item) => item > target);
//     else return letters[0];
// };

const nextGreatestLetter = function (letters, target) {
    let left = 0,
        right = letters.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midValue = letters[mid];

        if (midValue > target) right = mid - 1;
        else left = mid + 1;
    }

    if (left === letters.length) {
        return letters[0];
    } else {
        return letters[left];
    }
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a')); // 'c'
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c')); // 'f'
console.log(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z')); // 'x'
