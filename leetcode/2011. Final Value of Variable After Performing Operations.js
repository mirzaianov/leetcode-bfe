const finalValueAfterOperations = function (operations) {
    let result = 0;
    operations.forEach((element) => {
        if (element === 'X++' || element === '++X') {
            result++;
        } else {
            result--;
        }
    });
    return result;
};

console.log(finalValueAfterOperations(['X++', '++X', '--X', 'X--']));
