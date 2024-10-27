const stringHash = (s: string, k: number): string => {
  const aPositionInASCII = 97;
  let res: string = '';

  for (let i = 0; i < s.length; i += k) {
    const arr: string[] = s.slice(i, i + k).split('');
    const curr: number = arr.reduce(
      (acc: number, item: string) => acc + item.charCodeAt(0) - aPositionInASCII,
      0,
    );

    res += String.fromCharCode((curr % 26) + aPositionInASCII);
  }

  return res;
};

export default stringHash;
