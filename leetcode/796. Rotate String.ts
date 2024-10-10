const rotateString = (s: string, goal: string): boolean => {
  if (s === goal) return true;

  const arr: string[] = s.split('');

  for (let i = 0; i < s.length; i += 1) {
    const curr: string = arr.join('');

    if (curr === goal) return true;

    arr.push(arr.shift()!);
  }

  return false;
};

export default rotateString;
