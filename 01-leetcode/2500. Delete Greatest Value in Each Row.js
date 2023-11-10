const deleteGreatestValue = function (grid) {
    for (const row of grid) {
        row.sort((a, b) => b - a);
    }

    let sum = 0;

    for (let x = 0; x < grid[0].length; x++) {
        let max = 0;

        for (let y = 0; y < grid.length; y++) {
            max = Math.max(max, grid[y][x]);
        }
        sum += max;
    }

    return sum;
};

console.log(
    deleteGreatestValue([
        [1, 2, 4],
        [3, 3, 1],
    ])
); // 8
console.log(deleteGreatestValue([[10]])); // 10
console.log(
    deleteGreatestValue([
        [9, 81],
        [33, 17],
    ])
); // 98
