const numJewelsInStones = function (jewels, stones) {
    let acc = 0;
    for (let value of jewels) {
        for (let key of stones) {
            if (value === key) {
                acc++;
            }
        }
    }

    return acc;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
