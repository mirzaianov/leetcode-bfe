const countCompleteDayPairs = (hours: number[]): number => {
  let count = 0;

  for (let i = 0; i < hours.length; i += 1) {
    for (let j = i + 1; j < hours.length; j += 1) {
      if ((hours[i] + hours[j]) % 24 === 0) count += 1;
    }
  }

  return count;
};

export default countCompleteDayPairs;
