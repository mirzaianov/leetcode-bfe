const constructRectangle = (area: number): number[] => {
  let w: number = Math.floor(Math.sqrt(area));

  while (area % w !== 0) {
    w -= 1;
  }

  return [area / w, w];
};

export default constructRectangle;
