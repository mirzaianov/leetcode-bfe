const readBinaryWatch = (turnedOn: number): string[] => {
  if (!turnedOn) return ['0:00'];

  const watch = [0.01, 0.02, 0.04, 0.08, 0.16, 0.32, 1, 2, 4, 8];
  const res: string[] = [];

  const backtrack = (time: string, digits: number, i: number): void => {
    if (digits === turnedOn) {
      res.push(time.replace('.', ':'));

      return;
    }

    for (let j = i; j < watch.length; j += 1) {
      const currTime: number = Number(time) + watch[j];

      if (currTime >= 12 || currTime % 1 >= 0.6) continue;

      backtrack(currTime.toFixed(2), digits + 1, j + 1);
    }
  };

  backtrack('', 0, 0);

  return res;
};

export default readBinaryWatch;
