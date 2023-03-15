const compareVersion = function (version1, version2) {
    const array1 = deleteZero(divider(version1));
    const array2 = deleteZero(divider(version2));

    const l1 = array1.length,
        l2 = array2.length;

    let l;

    if (l1 < l2) l = l2;
    else l = l1;

    for (let i = 0; i < l; i++) {
        if (
            array1[i] === array2[i] ||
            (array1[i] === 0 && array2[i] === undefined) ||
            (array2[i] === 0 && array1[i] === undefined)
        )
            continue;

        if (array1[i] < array2[i] || array1[i] === undefined) return -1;

        if (array1[i] > array2[i] || array2[i] === undefined) return 1;
    }

    return 0;

    function divider(string) {
        return string.split('.');
    }

    function deleteZero(array) {
        return array.map((item) => +item);
    }
};

console.log(compareVersion('1.01', '1.001')); // 0
console.log(compareVersion('1.0', '1.0.0')); // 0
console.log(compareVersion('0.1', '1.1')); // -1
console.log(compareVersion('1.0.1', '1.0')); // 1
console.log(compareVersion('1', '1.1')); // -1
