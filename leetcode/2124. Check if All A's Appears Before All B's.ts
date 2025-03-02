const checkString = (s: string): boolean => {
  let isVisited = false;

  for (const l of s) {
    if (l === 'b') isVisited = true;
    if (isVisited && l === 'a') return false;
  }

  return true;
};

export default checkString;
