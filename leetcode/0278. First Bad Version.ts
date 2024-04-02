/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution =
  (isBadVersion: any) =>
  (n: number): number => {
    let l = 1;
    let r: number = n;

    while (l <= r) {
      const m: number = l + Math.floor((r - l) / 2);

      if (isBadVersion(m)) r = m - 1;
      if (!isBadVersion(m)) l = m + 1;
    }

    return l;
  };

export default solution;
