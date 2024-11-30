const countTestedDevices = (batteryPercentages: number[]): number => {
  let count = 0;

  for (const battery of batteryPercentages) {
    if (battery - count > 0) count += 1;
  }

  return count;
};

export default countTestedDevices;
