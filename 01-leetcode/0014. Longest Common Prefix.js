// const longestCommonPrefix = function (strs) {
//     if (!strs.length) return '';

//     for (let i = 0; i < strs[0].length; i++) {
//         for (let subs of strs) {
//             if (subs[i] !== strs[0][i]) {
//                 return subs.slice(0, i);
//             }
//         }
//     }

//     return strs[0];
// };

const longestCommonPrefix = function (strs) {
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return strs[j].slice(0, i);
            }
        }
    }

    return strs[0];
};

console.log(longestCommonPrefix(['flower', 'flow', 'floor', 'flight'])); // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""
console.log(longestCommonPrefix(['', ''])); // ""
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower'])); // "flower"
