const numRookCaptures = (board: string[][]): number => {
  let count = 0;

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] === 'R') {
        // top
        for (let k = i - 1; k >= 0; k -= 1) {
          if (board[k][j] === 'B') {
            break;
          } else if (board[k][j] === 'p') {
            count += 1;
            break;
          }
        }
        // right
        for (let k = j + 1; k < board[0].length; k += 1) {
          if (board[i][k] === 'B') {
            break;
          } else if (board[i][k] === 'p') {
            count += 1;
            break;
          }
        }
        // bottom
        for (let k = i + 1; k < board.length; k += 1) {
          if (board[k][j] === 'B') {
            break;
          } else if (board[k][j] === 'p') {
            count += 1;
            break;
          }
        }
        // left
        for (let k = j - 1; k >= 0; k -= 1) {
          if (board[i][k] === 'B') {
            break;
          } else if (board[i][k] === 'p') {
            count += 1;
            break;
          }
        }
      }
    }
  }

  return count;
};

export default numRookCaptures;
