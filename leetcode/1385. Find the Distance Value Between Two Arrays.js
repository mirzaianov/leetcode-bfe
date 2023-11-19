const findTheDistanceValue = (arr1, arr2, d) => {
  const len1 = arr1.length;
  const len2 = arr2.length;
  let count = 0;

  for (let i = 0; i < len1; i += 1) {
    let isValid = true;

    for (let j = 0; j < len2; j += 1) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        isValid = false;
        break;
      }
    }

    if (isValid) count += 1;
  }

  return count;
};
