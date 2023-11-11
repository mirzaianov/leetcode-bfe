const decode = function (encoded, first) {
    const decodedArray = [first];

    for (let i = 0; i < encoded.length; i++) {
        decodedArray.push(decodedArray[i] ^ encoded[i]);
    }

    return decodedArray;
};

console.log(decode([1, 2, 3], 1)); // [1, 0, 2, 1]
console.log(decode([6, 2, 7, 3], 4)); // [4, 2, 0, 7, 4]
console.log(decode([6], 1)); // [1, 7]
