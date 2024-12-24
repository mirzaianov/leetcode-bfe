const calPoints = (operations: string[]): number => {
  const res: number[] = [];

  for (let i = 0; i < operations.length; i += 1) {
    const op: string = operations[i];
    const num: number = Number(op);
    const last: number | undefined = res.at(-1);
    const prevLast: number | undefined = res.at(-2);

    switch (op) {
      case '+':
        if (prevLast && last) res.push(prevLast + last);
        break;
      case 'D':
        if (last) res.push(last * 2);
        break;
      case 'C':
        if (res.length) res.pop();
        break;
      default:
        if (!Number.isNaN(num)) res.push(num);
        break;
    }
  }

  return res.reduce((acc, item) => acc + item, 0);
};

export default calPoints;
