const countTestedDevices = (batteryPercentages) => {
  const len = batteryPercentages.length;
  let count = 0;

  for (let i = 0; i < len; i += 1) {
    if (batteryPercentages[i] > 0) {
      count += 1;

      for (let j = i + 1; j < len; j += 1) {
        batteryPercentages[j] -= 1;
      }
    }
  }

  return count;
};
