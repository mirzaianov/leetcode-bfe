// const generate = function (numRows) {
//     const result = [];

//     for (let i = 0; i < numRows; i++) {
//         // create a new arr in result array, and add 1 as the first item
//         result[i] = [];
//         result[i][0] = 1;

//         for (let j = 1; j < i; j++) {
//             // this loop will only run after the second loop of i for one time on each loop. right after -> [[1],[1,1]]
//             // in the children arr, the value of j indexed item is = prev array's left item[j-1] + right item[j]
//             result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
//         }
//         // finish the loop with adding 1 in the end for every child array
//         result[i][i] = 1;
//     }
//     return result;
// };

// #2

const generate = function (numRows) {
    const result = [];

    for (let i = 0; i < numRows; i++) {
        result[i] = [];
        result[i][0] = 1;
        result[i][i] = 1;

        for (let j = 1; j < i; j++) {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }
    }

    return result;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
