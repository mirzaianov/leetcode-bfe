const wordPattern = (pattern: string, s: string): boolean => {
  const sArray: string[] = s.split(/\s+/);
  const pLen: number = pattern.length;
  const sLen: number = sArray.length;
  const mapKey = new Map<string, string>();
  const mapValue = new Map<string, string>();

  if (pLen !== sLen) return false;

  for (let i = 0; i < pLen; i += 1) {
    const pCurr: string = pattern[i];
    const sCurr: string = sArray[i];

    if (mapKey.has(pCurr) && mapKey.get(pCurr) !== sCurr) return false;
    if (mapValue.has(sCurr) && mapValue.get(sCurr) !== pCurr) return false;

    mapKey.set(pCurr, sCurr);
    mapValue.set(sCurr, pCurr);
  }

  return true;
};

export default wordPattern;
