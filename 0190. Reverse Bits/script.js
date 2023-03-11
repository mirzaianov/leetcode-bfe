// const reverseBits = function (n) {
//     let result = 0;

//     for (let i = 0; i < 32; i++) {
//         // find the last bit of n
//         const lastBit = n & 1;

//         // shift the last bit of n to the left
//         const reversedLastBit = lastBit << (31 - i);

//         // insert the reversed last bit of n into the result
//         result |= reversedLastBit;

//         // the last bit of n is already taken care of, so we need to drop it
//         n >>>= 1;

//     }

//     // convert the result to an unsigned 32-bit integer
//     return result >>> 0;
// };

const reverseBits = function (n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        // take the i bit from the end then perform & with ...000001
        // to obtain ...000000 or ...000001 as the i bit from the end of n.
        const bit = (n >> i) & 1;
        // Perform the OR | operator with result to append the bit
        // at index i position by shifting left bit (31 -i)
        result = result | (bit << (31 - i));
    }
    // For keeping the sign for the result.
    return result >>> 0;
};

console.log(reverseBits(00000010100101000001111010011100)); // 964176192
console.log(reverseBits(11111111111111111111111111111101)); // 3221225471
