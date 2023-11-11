// const firstUniqChar = function (s) {
//     const map = {};

//     for (let i = 0; i < s.length; i++) {
//         map[s[i]] = map[s[i]] + 1 || 1;
//     }

//     for (let i = 0; i < Object.keys(map).length; i++) {
//         if (Object.values(map)[i] === 1) {
//             return s.indexOf(Object.keys(map)[i]);
//         }
//     }

//     return -1;
// };

const firstUniqChar = function (s) {
    const store = {};

    for (let i = 0; i < s.length; i++) {
        store[s[i]] = store[s[i]] ? store[s[i]] + 1 : 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (store[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('aabb')); // -1
