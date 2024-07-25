const addedInteger = (nums1: number[], nums2: number[]): number =>
  Math.min(...nums2) - Math.min(...nums1);

export default addedInteger;
