const countBits = function (n) {
    const storage = [];

    for (let i = 0; i <= n; i++) {
        storage.push(
            i
                .toString(2)
                .split('')
                .reduce((acc, item) => acc + +item, 0)
        );
    }

    return storage;
};

console.log(countBits(2)); // [0, 1, 1]
console.log(countBits(5)); // [0, 1, 1, 2, 1, 2]
