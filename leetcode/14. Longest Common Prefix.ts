const longestCommonPrefix = (strs: string[]): string => {
  let result: string = strs[0];

  for (const s of strs) {
    while (!s.startsWith(result)) {
      result = result.slice(0, -1);

      if (result === '') return result;
    }
  }

  return result;
};

export default longestCommonPrefix;
