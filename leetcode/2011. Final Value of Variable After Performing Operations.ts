const finalValueAfterOperations = (operations: string[]): number => {
  let count = 0;

  for (const item of operations) {
    if (item.match(/\+/)) count += 1;
    else count -= 1;
  }

  return count;
};

export default finalValueAfterOperations;
