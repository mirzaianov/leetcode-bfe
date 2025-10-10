const doesValidArrayExist = (derived: number[]): boolean => {
  let first = 0;
  let last = 0;

  for (const item of derived) {
    if (item === 1) {
      last = ~last;
    }
  }

  return first === last;
};

export default doesValidArrayExist;
