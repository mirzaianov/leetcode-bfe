// const countMatches = function (items, ruleKey, ruleValue) {
//     const ruleKeyArray = ['type', 'color', 'name'];
//     let count = 0;

//     for (let values of items) {
//         for (let i = 0; i < ruleKeyArray.length; i++) {
//             if (ruleKey === ruleKeyArray[i]) {
//                 if (values[i] === ruleValue) {
//                     count++;
//                 }
//             }
//         }
//     }

//     return count;
// };

var countMatches = function (items, ruleKey, ruleValue) {
    let map = {
        type: 0,
        color: 1,
        name: 2,
    };

    return items.filter((item) => item[map[ruleKey]] === ruleValue).length;
};

console.log(
    countMatches(
        [
            ['phone', 'blue', 'pixel'],
            ['computer', 'silver', 'lenovo'],
            ['phone', 'gold', 'iphone'],
        ],
        'color',
        'silver'
    )
); // 1
// console.log(
//     countMatches(
//         [
//             ['phone', 'blue', 'pixel'],
//             ['computer', 'silver', 'phone'],
//             ['phone', 'gold', 'iphone'],
//         ],
//         'type',
//         'phone'
//     )
// ); // 2
