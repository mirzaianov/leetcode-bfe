// const mostWordsFound = function (sentences) {
//     let arr = [];

//     for (let value of sentences) {
//         let spaces = 0;

//         for (let item of value) {
//             if (item === ' ') {
//                 spaces++;
//             }
//         }

//         arr.push(spaces);
//     }

//     return Math.max(...arr) + 1;
// };

const mostWordsFound = function (sentences) {
    let count = 0,
        max = 0;

    for (let word of sentences) {
        count = word.split(' ').length;
        max = Math.max(count, max);
    }

    return max;
};

console.log(
    mostWordsFound([
        'alice and bob love leetcode',
        'this is great thanks very much',
        'i think so too',
    ])
);
