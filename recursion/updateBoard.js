var updateBoard = function(board, click) {
  //let the current position be where click is where i is x and j is y.
  //let us check to see if there are values to left and right, top and bottom.
  //let us write a function recursively check the surrounding values.
    //if no adjacent values are 'M', flip and apply recursion again.
  var flipAdjacentSquares = (array) => {
      //space above i - 1
      var mines = 0;
      var row = array[0];
      var col = array[1];
      if (board[row] && board[row][col] !== 'M' && board[row][col] === 'E') {
          board[row][col] = 'B';
          if (board[row] && board[row][col - 1] ==='M') {
              mines++;
          }
          if (board[row] && board[row][col + 1] ==='M') {
              mines++;
          }
          if (board[row - 1] && board[row - 1][col] ==='M') {
              mines++;
          }
          if (board[row - 1] && board[row - 1][col + 1] ==='M') {
              mines++

          }
          if (board[row - 1] && board[row - 1][col - 1] ==='M') {
              mines++;
          }
          if (board[row + 1] && board[row + 1][col] === 'M') {
              mines++;
          }
          if (board[row + 1] && board[row + 1][col + 1] === 'M') {
              mines++;
          }
          if (board[row + 1] && board[row + 1][col - 1] === 'M') {
              mines++;
          }
          if (mines > 0) {
              board[row][col] = mines.toString();
          }
          if (mines === 0) {
              flipAdjacentSquares([row, col - 1]);
              flipAdjacentSquares([row, col + 1]);
              flipAdjacentSquares([row - 1, col]);
              flipAdjacentSquares([row - 1, col + 1]);
              flipAdjacentSquares([row - 1, col - 1]);
              flipAdjacentSquares([row + 1, col]);
              flipAdjacentSquares([row + 1, col + 1]);
              flipAdjacentSquares([row + 1, col - 1]);
          }

      }
      if (board[row] && board[row][col] === 'M') {
          board[row][col] === 'X';
          return board;
      }
  };
  flipAdjacentSquares(click);
  return board;
};
var board = [['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']];

var click = [3,0];
console.log(updateBoard(board, click));
