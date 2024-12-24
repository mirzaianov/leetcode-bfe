const minDeletionSize = (strs: string[]): number => {
  let count = 0;

  for (let j = 0; j < strs[0].length; j += 1) {
    for (let i = 1; i < strs.length; i += 1) {
      if (strs[i][j] < strs[i - 1][j]) {
        count += 1;
        break;
      }
    }
  }

  return count;
};

export default minDeletionSize;
