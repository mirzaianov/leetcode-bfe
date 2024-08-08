const minOperations = (logs: string[]): number => {
  let lvl = 0;

  for (const log of logs) {
    if (log === './' || (log === '../' && lvl === 0)) {
      continue;
    } else if (log === '../') {
      lvl -= 1;
    } else {
      lvl += 1;
    }
  }

  return lvl;
};

export default minOperations;
