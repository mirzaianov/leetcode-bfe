const characterReplacement = (s: string, k: number): number => {
  const freqMap = new Map<string, number>();
  let maxLength = 0;
  let maxFreq = 0;
  let left = 0;

  for (let right = 0; right < s.length; right += 1) {
    const character = s[right];

    freqMap.set(character, (freqMap.get(character) || 0) + 1);
    maxFreq = Math.max(maxFreq, freqMap.get(character)!);

    if (maxFreq + k < right - left + 1) {
      freqMap.set(s[left], freqMap.get(s[left])! - 1);
      left += 1;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

export default characterReplacement;
