const balancedStringSplit = function (s) {
    let count = 0;
    let digits = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            digits--;
        } else {
            digits++;
        }

        if (digits === 0) {
            count++;
        }
    }

    return count;
};

console.log(balancedStringSplit('RLRRLLRLRL')); // 4
console.log(balancedStringSplit('RLRRRLLRLL')); // 2
console.log(balancedStringSplit('LLLLRRRR')); // 1
