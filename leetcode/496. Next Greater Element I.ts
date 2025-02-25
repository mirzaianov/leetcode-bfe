const nextGreaterElement = (nums1: number[], nums2: number[]): number[] => {
  const res: number[] = [];

  for (let i = 0; i < nums1.length; i += 1) {
    const startIndex: number = nums2.indexOf(nums1[i]);
    const num: number | undefined = nums2.slice(startIndex).find((item) => item > nums1[i]);

    res.push(num || -1);
  }

  return res;
};

export default nextGreaterElement;
