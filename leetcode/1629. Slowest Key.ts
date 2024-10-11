const slowestKey = (releaseTimes: number[], keysPressed: string): string => {
  let maxKey: string = keysPressed[0];
  let maxDiff: number = releaseTimes[0];

  for (let i = 1; i < keysPressed.length; i += 1) {
    const currDiff: number = releaseTimes[i] - releaseTimes[i - 1];

    if (currDiff > maxDiff) {
      maxKey = keysPressed[i];
      maxDiff = currDiff;
    } else if (currDiff === maxDiff && keysPressed[i] > maxKey) {
      maxKey = keysPressed[i];
    }
  }

  return maxKey;
};

export default slowestKey;
