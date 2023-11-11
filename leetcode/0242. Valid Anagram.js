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

// const isAnagram = function (s, t) {
//     if (s.length !== t.length) return false;

//     const storeS = stringToObj(s),
//         storeT = stringToObj(t);

//     for (let i in storeS) {
//         if (storeS[i] !== storeT[i]) {
//             return false;
//         }
//     }

//     return true;

//     function stringToObj(string) {
//         const object = {};

//         for (let letter of string) {
//             object[letter] = object[letter] ? object[letter] + 1 : 1;
//         }

//         return object;
//     }
// };

// #2

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (const l of s) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  for (const l of t) {
    if (!map.get(l)) map.set(l, 1);
    else if (map.get(l) === 1) map.delete(l);
    else if (map.get(l) > 1) map.set(l, map.get(l) - 1);
  }

  if (map.size !== 0) return false;

  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
