const numberOfPairs = (nums1: number[], nums2: number[], k: number): number => {
  let count = 0;

  for (const n1 of nums1) {
    for (const n2 of nums2) {
      if (n1 % (n2 * k) === 0) count += 1;
    }
  }

  return count;
};

export default numberOfPairs;
