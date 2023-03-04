// const isAnagram = function (s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }

//     const obj1 = {},
//         obj2 = {};

//     for (let item of s) {
//         obj1[item] = obj1[item] + 1 || 1;
//     }

//     for (let item of t) {
//         obj2[item] = obj2[item] + 1 || 1;
//     }

//     for (let item in obj1) {
//         if (obj1[item] !== obj2[item]) {
//             return false;
//         }
//     }

//     return true;
// };

const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const storeS = stringToObj(s),
        storeT = stringToObj(t);

    for (let i in storeS) {
        if (storeS[i] !== storeT[i]) {
            return false;
        }
    }

    return true;

    function stringToObj(string) {
        const object = {};

        for (let letter of string) {
            object[letter] = object[letter] ? object[letter] + 1 : 1;
        }

        return object;
    }
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
