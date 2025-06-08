const kItemsWithMaximumSum = (
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number,
): number => {
  let res = 0;

  while (k > 0) {
    if (numOnes > 0) {
      numOnes -= 1;
      res += 1;
    } else if (numZeros > 0) {
      numZeros -= 1;
      res += 0;
    } else if (numNegOnes > 0) {
      numNegOnes -= 1;
      res += -1;
    }

    k -= 1;
  }

  return res;
};

export default kItemsWithMaximumSum;
