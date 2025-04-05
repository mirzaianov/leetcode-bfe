const findTheDistanceValue = (arr1: number[], arr2: number[], d: number): number => {
  let count = 0;

  for (let i = 0; i < arr1.length; i += 1) {
    let isValid = true;

    for (let j = 0; j < arr2.length; j += 1) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        isValid = false;
        break;
      }
    }

    if (isValid) count += 1;
  }

  return count;
};

export default findTheDistanceValue;
