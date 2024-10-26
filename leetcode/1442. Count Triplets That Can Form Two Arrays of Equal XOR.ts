const countTriplets = (arr: number[]): number => {
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    let xor = arr[i];

    for (let j = i + 1; j < arr.length; j += 1) {
      xor ^= arr[j];

      if (xor === 0) count += j - i;
    }
  }

  return count;
};

export default countTriplets;
