/*

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.


Example 1:

Input: n = 3
Output: ["1","2","Fizz"]


Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

*/

/*
@param {number} n
@return {string[]}
*/

const fizzBuzz = function (n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            arr[i] = 'FizzBuzz';
        } else if (arr[i] % 3 === 0) {
            arr[i] = 'Fizz';
        } else if (arr[i] % 5 === 0) {
            arr[i] = 'Buzz';
        } else {
            arr[i] = `${arr[i]}`;
        }
    }

    return arr;
};

console.log(fizzBuzz(15));
