const extractNumbers = (date: string): number[] =>
  date.split(':').map((item: string) => Number(item));

const convertTime = (current: string, correct: string): number => {
  const [currentHours, currentMinutes] = extractNumbers(current);
  const [correctHours, correctMinutes] = extractNumbers(correct);

  let hoursDiff: number = correctHours - currentHours;
  let minutesDiff: number = correctMinutes - currentMinutes;

  if (minutesDiff < 0) {
    hoursDiff -= 1;
    minutesDiff += 60;
  }

  let operations = 0;

  operations += hoursDiff;

  while (minutesDiff >= 15) {
    minutesDiff -= 15;
    operations += 1;
  }

  while (minutesDiff >= 5) {
    minutesDiff -= 5;
    operations += 1;
  }

  while (minutesDiff > 0) {
    minutesDiff -= 1;
    operations += 1;
  }

  return operations;
};

export default convertTime;
