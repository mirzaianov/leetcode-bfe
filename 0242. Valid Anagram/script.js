const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const obj1 = {},
        obj2 = {};

    for (let item of s) {
        obj1[item] = obj1[item] + 1 || 1;
    }

    for (let item of t) {
        obj2[item] = obj2[item] + 1 || 1;
    }

    for (let item in obj1) {
        if (obj1[item] !== obj2[item]) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
