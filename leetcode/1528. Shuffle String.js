const restoreString = function (s, indices) {
    let newArray = [];

    for (let i = 0; i < s.length; i++) {
        newArray[indices[i]] = s[i];
    }

    return newArray.join('');
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString('abc', [0, 1, 2]));
