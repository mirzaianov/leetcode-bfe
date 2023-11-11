'use strict';

/*
@param {string} ransomNote
@param {string} magazine
@return {boolean}
 */

const ransomNote = 'aaab',
    magazine = 'aaacb';

// var canConstruct = function (ransomNote, magazine) {
//     for (let i = 0; i < ransomNote.length; i++) {
//         console.log(ransomNote[i]);
//         for (let j = 0; j < magazine.length; j++) {
//             if (ransomNote[i] === magazine[j]) {
//                 let newString = magazine.replace(magazine[j], ``);
//                 console.log(newString);
//             }
//         }
//     }
// };

// /**
//  * 1. берем первый символ из ransomNote и проверяем на наличие ее в magazine
//  * 2. если находим, то удаляем его из magazine
//  * 3. повторяем цикл
//  * 4. Если закончатся символы в ransomeNote - то TRUE
//  * 5. Если закончились в magazine, то FALSE
//  */

const canConstruct = function (ransomNote, magazine) {
    const arr = magazine.split('');

    for (let i = 0; i < ransomNote.length; i++) {
        if (arr.indexOf(ransomNote[i]) === -1) {
            return false;
        } else {
            arr.splice(arr.indexOf(ransomNote[i]), 1);
        }
    }
    return true;
};

canConstruct(ransomNote, magazine);
