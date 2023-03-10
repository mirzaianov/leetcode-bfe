const hammingDistance = function (x, y) {
    let count = 0;
    let binary = x ^ y;

    while (binary !== 0) {
        if (binary & 1) count++;
        binary = binary >>> 1;
    }

    return count;
};

console.log(hammingDistance(1, 4)); // 2
console.log(hammingDistance(3, 1)); // 1
