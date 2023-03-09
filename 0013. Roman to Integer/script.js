// const romanToInt = function (s) {
//     let int = 0;
//     const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

//     for (let i = 0; i < s.length; i++) {
//         if (roman[s[i]] < roman[s[i + 1]]) {
//             int -= roman[s[i]];
//         } else {
//             int += roman[s[i]];
//         }
//     }

//     return int;
// };

const romanToInt = function (s) {
    const numbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (numbers[s[i]] < numbers[s[i + 1]]) {
            result -= numbers[s[i]];
        } else {
            result += numbers[s[i]];
        }
    }

    return result;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
