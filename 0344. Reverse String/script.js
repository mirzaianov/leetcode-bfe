// const reverseString = function (s) {
//     let l = 0;
//     r = s.length - 1;

//     while (l < r) {
//         [s[l], s[r]] = [s[r], s[l]];
//         l++;
//         r--;
//     }
// };

// 2nd solution

const reverseString = function (s) {
    let first = 0,
        last = s.length - 1;

    while (first < last) {
        [s[first], s[last]] = [s[last], s[first]];
        first++;
        last--;
    }

    return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ["o","l","l","e","h"]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // ["h","a","n","n","a","H"]
