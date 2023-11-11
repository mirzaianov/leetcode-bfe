// const myAtoi = function (str) {
//     let i = 0;
//     let sign = 1;
//     let result = 0;

//     while (i < str.length && str[i] === ' ') i++;

//     // console.log(`log 1 | str: ${str} | i: ${i} | sign: ${sign} | result: ${result}`);

//     if (i < str.length && (str[i] === '+' || str[i] === '-')) {
//         sign = str[i] === '-' ? -1 : 1;
//         i++;
//     }

//     const max32 = 2 ** 31 - 1;
//     const min32 = -(2 ** 31);

//     // console.log(`log 2 | str: ${str} | i: ${i} | sign: ${sign} | result: ${result}`);

//     while (i < str.length && str[i].match(/[0-9]/) !== null) {
//         const num = str[i] - '0';
//         // console.log(`str[i]: ${str[i]} | num: ${num} | ${max32 % 10}`);

//         if (result > Math.floor(max32 / 10) || (result === Math.floor(max32 / 10) && num > max32 % 10)) {
//             return sign === 1 ? max32 : min32;
//         }

//         result = result * 10 + num;

//         i++;

//         // console.log(`log 3 | str: ${str} | i: ${i} | sign: ${sign} | result: ${result} | ${Math.floor(max32 / 10)}`);
//     }

//     if (result === 0) {
//         return result;
//     } else return result * sign;
// };

const myAtoi = function (str) {
    let i = 0,
        sign = 1,
        result = 0;

    const max = 2 ** 31 - 1,
        min = -(2 ** 31),
        l = str.length;

    while (i < l && str[i] === ' ') i++;

    if (i < l && (str[i] === '+' || str[i] === '-')) {
        sign = str[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < l && str[i].match(/[0-9]/) !== null) {
        let num = str[i] - '0';

        if (result > Math.floor(max / 10) || (result === Math.floor(max / 10) && num > max % 10)) {
            return sign === 1 ? max : min;
        }

        result = result * 10 + num;
        i++;
    }

    if (result === 0) {
        return result;
    } else {
        return result * sign;
    }
};

console.log(myAtoi('42')); // 42
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('   +42')); // 42
console.log(myAtoi('+-42')); // 0
console.log(myAtoi('words')); // 0
console.log(myAtoi('4193 with words')); // 4193
console.log(myAtoi('4193 with words 555')); // 4193
console.log(myAtoi('-2147483648')); // -2147483648
console.log(myAtoi('-2147483649')); // -2147483648
console.log(myAtoi('3.14159')); // 3
console.log(myAtoi('1')); // 1
console.log(myAtoi('   -0 123')); // 0
console.log(myAtoi('  0000000000012345678')); // 12345678
