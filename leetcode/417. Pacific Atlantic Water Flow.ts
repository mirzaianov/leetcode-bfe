const addRC = (set: Set<string>, row: number, col: number): void => {
  set.add(`${row},${col}`);
};

const hasRC = (set: Set<string>, row: number, col: number): boolean => set.has(`${row},${col}`);

const pacificAtlantic = (heights: number[][]): number[][] => {
  const pac = new Set<string>();
  const atl = new Set<string>();

  const ROWS = heights.length;
  const COLS = heights[0].length;

  const dfs = (row: number, col: number, set: Set<string>, prev: number = -Infinity): void => {
    if (row < 0 || col < 0 || row >= ROWS || col >= COLS) return;

    if (prev > heights[row][col]) return;

    if (hasRC(set, row, col)) return;

    addRC(set, row, col);

    const val = heights[row][col];

    dfs(row + 1, col, set, val);
    dfs(row - 1, col, set, val);
    dfs(row, col + 1, set, val);
    dfs(row, col - 1, set, val);
  };

  for (let col = 0; col < COLS; col += 1) {
    dfs(0, col, pac);
    dfs(ROWS - 1, col, atl);
  }

  for (let row = 0; row < ROWS; row += 1) {
    dfs(row, 0, pac);
    dfs(row, COLS - 1, atl);
  }

  const res = [];
  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      if (hasRC(pac, row, col) && hasRC(atl, row, col)) {
        res.push([row, col]);
      }
    }
  }

  return res;
};

export default pacificAtlantic;
