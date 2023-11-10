const numRookCaptures = (board) => {
  let rook;

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] === 'R') rook = [i, j];
    }
  }

  let count = 0;

  for (let i = rook[0] - 1; i >= 0; i -= 1) {
    if (board[i][rook[1]] === 'p') {
      count += 1;
      break;
    }

    if (board[i][rook[1]] === 'B') break;
  }

  for (let i = rook[0] + 1; i < board.length; i += 1) {
    if (board[i][rook[1]] === 'p') {
      count += 1;
      break;
    }

    if (board[i][rook[1]] === 'B') break;
  }

  for (let j = rook[1] - 1; j >= 0; j -= 1) {
    if (board[rook[0]][j] === 'p') {
      count += 1;
      break;
    }

    if (board[rook[0]][j] === 'B') break;
  }

  for (let j = rook[1] + 1; j < board[0].length; j += 1) {
    if (board[rook[0]][j] === 'p') {
      count += 1;
      break;
    }

    if (board[rook[0]][j] === 'B') break;
  }

  return count;
};
