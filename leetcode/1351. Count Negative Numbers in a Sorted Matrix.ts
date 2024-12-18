const countNegatives = (grid: number[][]): number => grid.flat().filter((item) => item < 0).length;

export default countNegatives;
