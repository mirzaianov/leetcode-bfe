const compareVersion = (version1: string, version2: string): number => {
  const nums1: string[] = version1.split('.');
  const len1: number = nums1.length;
  const nums2: string[] = version2.split('.');
  const len2: number = nums2.length;

  for (let i = 0; i < Math.max(len1, len2); i += 1) {
    const n1: number = parseInt(nums1[i], 10) || 0;
    const n2: number = parseInt(nums2[i], 10) || 0;

    if (n1 < n2) return -1;

    if (n1 > n2) return 1;
  }

  return 0;
};

export default compareVersion;
