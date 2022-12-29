/**
 * @param {string} address
 * @return {string}
 */

const address = '255.100.50.0';

// const defangIPaddr = function (address) {
//     return address.replace(/\./g, '[.]');
// };

const defangIPaddr = function (address) {
    return address.replaceAll('.', '[.]');
};

console.log(defangIPaddr(address));
