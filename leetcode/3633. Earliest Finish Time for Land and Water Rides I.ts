const earliestFinishTime = (
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[],
): number => {
  let minTime = Infinity;

  for (let i = 0; i < landStartTime.length; i += 1) {
    for (let j = 0; j < waterStartTime.length; j += 1) {
      // Land first
      const endLand = landStartTime[i] + landDuration[i];
      const startWater = Math.max(waterStartTime[j], endLand);
      const endWater = startWater + waterDuration[j];

      // Water first
      const endWaterFirst = waterStartTime[j] + waterDuration[j];
      const startLand = Math.max(landStartTime[i], endWaterFirst);
      const endLandSecond = startLand + landDuration[i];

      const totalTime = Math.min(endWater, endLandSecond);
      minTime = Math.min(minTime, totalTime);
    }
  }

  return minTime;
};

export default earliestFinishTime;
