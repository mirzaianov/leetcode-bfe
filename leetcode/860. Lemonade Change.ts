const lemonadeChange = (bills: number[]): boolean => {
  let fives = 0;
  let tens = 0;

  for (const b of bills) {
    if (b === 5) {
      fives += 1;
    }

    if (b === 10) {
      tens += 1;

      if (fives >= 1) {
        fives -= 1;
      } else {
        return false;
      }
    }

    if (b === 20) {
      if (fives >= 1 && tens >= 1) {
        fives -= 1;
        tens -= 1;
      } else if (fives >= 3) {
        fives -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};

export default lemonadeChange;
