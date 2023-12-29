const reformatNumber = (number: string): string => {
  const toCleanArray = (str: string): string[] => {
    const digits: string = '0123456789';

    return str.split('').filter((item: string) => digits.includes(item));
  };

  const cleanedNumber: string[] = toCleanArray(number);
  const res: string[] = [];

  while (cleanedNumber.length) {
    const len = cleanedNumber.length;

    if (len > 4) {
      const current: string = cleanedNumber.splice(0, 3).join('');

      res.push(current);
    }

    if (len === 4) {
      const first: string = cleanedNumber.splice(0, 2).join('');
      const second: string = cleanedNumber.splice(0).join('');

      res.push(first, second);
    }

    if (len < 4) {
      const current: string = cleanedNumber.splice(0).join('');

      res.push(current);
    }
  }

  return res.join('-');
};
