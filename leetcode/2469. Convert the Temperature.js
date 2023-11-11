/**
 * @param {number} celsius
 * @return {number[]}
 */

const celsius = 36.5;

const convertTemperature = function (celsius) {
    return [celsius + 273.15, celsius * 1.8 + 32.0];
};

console.log(convertTemperature(celsius));
