type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = (arr: MultiDimensionalArray, n: number): MultiDimensionalArray => {
  const res: MultiDimensionalArray = [];

  const helper = (items: MultiDimensionalArray, lvl: number): void => {
    for (const item of items) {
      if (Array.isArray(item) && lvl > 0) {
        helper(item, lvl - 1);
      } else {
        res.push(item);
      }
    }
  };

  helper(arr, n);

  return res;
};

export default flat;
