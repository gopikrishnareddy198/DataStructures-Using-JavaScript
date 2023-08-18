function numIslands(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

const numRows = grid.length;
  const numCols = grid[0].length;
  let count = 0;
  function dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= numRows ||
      col >= numCols ||
      grid[row][col] !== '1'
    ) {
      return;
    }
    grid[row][col] = '0'; // Mark the current cell as visited
    // Recursively explore the four adjacent neighbors
    dfs(row - 1, col); // Up
    dfs(row + 1, col); // Down
    dfs(row, col - 1); // Left
    dfs(row, col + 1); // Right
  }
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
}
// Example usage
const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
console.log(numIslands(grid)); // Output: 1