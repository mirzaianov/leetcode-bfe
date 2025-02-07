const answerQueries = (nums: number[], queries: number[]): number[] => {
  const len: number = queries.length;
  const sortedNums: number[] = nums.sort((a, b) => a - b);
  const res: number[] = new Array(len).fill(0);

  for (let i = 0; i < len; i += 1) {
    let sum = 0;
    let count = 0;

    for (let j = 0; j < sortedNums.length; j += 1) {
      sum += sortedNums[j];

      if (sum <= queries[i]) {
        count += 1;
      } else {
        break;
      }
    }

    res[i] = count;
  }

  return res;
};

export default answerQueries;
