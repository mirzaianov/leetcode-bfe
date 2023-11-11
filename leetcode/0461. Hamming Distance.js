// const hammingDistance = function (x, y) {
//     let count = 0;
//     let binary = x ^ y;

//     while (binary !== 0) {
//         if (binary & 1) count++;
//         binary = binary >>> 1;
//     }

//     return count;
// };

const hammingDistance = function (x, y) {
    return hammingWeight(x ^ y);

    function hammingWeight(n) {
        let result = 0;

        for (let i = 0; i < 32; i++) {
            if ((n & 1) === 1) {
                result++;
            }

            n = n >>> 1;
        }

        return result;
    }
};

console.log(hammingDistance(1, 4)); // 2
console.log(hammingDistance(3, 1)); // 1
