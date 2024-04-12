const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  let [a, b]: [number[], number[]] = [nums1, nums2];
  const total: number = nums1.length + nums2.length;
  const half: number = Math.floor(total / 2);

  if (b.length < a.length) {
    [a, b] = [b, a];
  }

  let [l, r]: [number, number] = [0, a.length - 1];

  while (true) {
    const i: number = l + Math.floor((r - l) / 2);
    const j: number = half - i - 2;

    const aLeft: number = i >= 0 ? a[i] : -Infinity;
    const aRight: number = i + 1 < a.length ? a[i + 1] : Infinity;
    const bLeft: number = j >= 0 ? b[j] : -Infinity;
    const bRight: number = j + 1 < b.length ? b[j + 1] : Infinity;

    if (aLeft <= bRight && bLeft <= aRight) {
      if (total % 2) return Math.min(aRight, bRight);

      return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
    }

    if (aLeft > bRight) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
};

export default findMedianSortedArrays;
