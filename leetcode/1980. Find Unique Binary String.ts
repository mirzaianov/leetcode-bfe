const findDifferentBinaryString = (nums: string[]): string => {
  const set = new Set<string>(nums);
  let res = '';

  const backtrack = (s: string): boolean => {
    if (s.length === nums.length) {
      if (!set.has(s)) {
        res = s;

        return true;
      }

      return false;
    }

    if (backtrack(`${s}0`)) return true;
    if (backtrack(`${s}1`)) return true;

    return false;
  };

  backtrack('');

  return res;
};

export default findDifferentBinaryString;
