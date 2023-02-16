const longestCommonPrefix = function (strs) {
    if (!strs.length) return '';

    for (let i = 0; i < strs[0].length; i++) {
        for (let subs of strs) {
            if (subs[i] !== strs[0][i]) {
                return subs.slice(0, i);
            }
        }
    }

    return strs[0];
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""
