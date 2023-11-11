const maximum69Number = function (num) {
    let num2String = `${num}`;
    let newString = num2String.replace('6', '9');

    return +newString;
};

console.log(maximum69Number(9969));
console.log(maximum69Number(9996));
console.log(maximum69Number(9999));
console.log(maximum69Number(6966));
