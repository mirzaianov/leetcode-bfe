'use strict';

const mySqrt = function (x) {
    let y = 1;

    while (y * y <= x) {
        y++;
    }

    return y - 1;
};

console.log(mySqrt(17));
