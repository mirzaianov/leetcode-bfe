const busyStudent = (startTime: number[], endTime: number[], queryTime: number): number => {
  let count = 0;

  for (let i = 0; i < startTime.length; i += 1) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) count += 1;
  }

  return count;
};

export default busyStudent;
