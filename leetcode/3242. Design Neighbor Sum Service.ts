class neighborSum {
  grid: number[][];

  constructor(grid: number[][]) {
    this.grid = grid;
  }

  adjacentSum(value: number): number {
    let sum = 0;

    for (let i = 0; i < this.grid.length; i += 1) {
      for (let j = 0; j < this.grid[i].length; j += 1) {
        if (this.grid[i][j] === value) {
          sum += this.grid[i + 1]?.[j] ?? 0;
          sum += this.grid[i - 1]?.[j] ?? 0;
          sum += this.grid[i]?.[j + 1] ?? 0;
          sum += this.grid[i]?.[j - 1] ?? 0;
        }
      }
    }

    return sum;
  }

  diagonalSum(value: number): number {
    let sum = 0;

    for (let i = 0; i < this.grid.length; i += 1) {
      for (let j = 0; j < this.grid[i].length; j += 1) {
        if (this.grid[i][j] === value) {
          sum += this.grid[i + 1]?.[j + 1] ?? 0;
          sum += this.grid[i - 1]?.[j - 1] ?? 0;
          sum += this.grid[i - 1]?.[j + 1] ?? 0;
          sum += this.grid[i + 1]?.[j - 1] ?? 0;
        }
      }
    }

    return sum;
  }
}

/**
 * Your neighborSum object will be instantiated and called as such:
 * var obj = new neighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */

export default neighborSum;
