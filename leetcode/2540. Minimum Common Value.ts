const getCommon = (nums1: number[], nums2: number[]): number => {
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    const curr1: number = nums1[i];
    const curr2: number = nums2[j];

    if (curr1 > curr2) {
      j += 1;
    } else if (curr2 > curr1) {
      i += 1;
    } else {
      return curr1;
    }
  }

  return -1;
};

export default getCommon;
