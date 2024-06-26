function isValid(board: string[][], row: number, col: number, num: string): boolean {
  for (let i = 0; i < 9; i += 1) {
    if (board[i][col] === num) return false;
    if (board[row][i] === num) return false;
    if (
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] === num
    )
      return false;
  }

  return true;
}

function solve(board: string[][]): boolean {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] === '.') {
        for (let num = 1; num <= 9; num += 1) {
          if (isValid(board, i, j, num.toString())) {
            board[i][j] = num.toString();

            if (solve(board)) {
              return true;
            }

            board[i][j] = '.';
          }
        }
        return false;
      }
    }
  }
  return true;
}

function solveSudoku(board: string[][]): void {
  solve(board);
}

export default solveSudoku;
