// const fizzBuzz = function (n) {
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//         arr[i] = i + 1;
//         if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
//             arr[i] = 'FizzBuzz';
//         } else if (arr[i] % 3 === 0) {
//             arr[i] = 'Fizz';
//         } else if (arr[i] % 5 === 0) {
//             arr[i] = 'Buzz';
//         } else {
//             arr[i] = `${arr[i]}`;
//         }
//     }

//     return arr;
// };

// const fizzBuzz = function (n) {
//     const accum = [];

//     for (let i = 1; i <= n; i++) {
//         if (i % 15 === 0) {
//             accum.push('FizzBuzz');
//         } else if (i % 5 === 0) {
//             accum.push('Buzz');
//         } else if (i % 3 === 0) {
//             accum.push('Fizz');
//         } else {
//             accum.push(`${i}`);
//         }
//     }

//     return accum;
// };

const fizzBuzz = function (n) {
    const store = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            store.push('FizzBuzz');
        } else if (i % 5 === 0) {
            store.push('Buzz');
        } else if (i % 3 === 0) {
            store.push('Fizz');
        } else {
            store.push(`${i}`);
        }
    }

    return store;
};

console.log(fizzBuzz(3)); // ["1","2","Fizz"]
console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
