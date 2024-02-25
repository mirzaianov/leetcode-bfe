class SubrectangleQueries {
  matrix: number[][];

  constructor(rectangle: number[][]) {
    this.matrix = rectangle;
  }

  updateSubrectangle(
    row1: number,
    col1: number,
    row2: number,
    col2: number,
    newValue: number,
  ): void {
    for (let i = row1; i <= row2; i += 1) {
      for (let j = col1; j <= col2; j += 1) {
        this.matrix[i][j] = newValue;
      }
    }
  }

  getValue(row: number, col: number): number {
    return this.matrix[row][col];
  }
}
