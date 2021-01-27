var bestTimeToBuyAndSellStock = (arr) => {
  var highestProfit = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var t = 1; t < arr.length; t++) {
      if (arr[t] - arr[i] > highestProfit) {
        highestProfit = (arr[t] - arr[i]);
      }
    }
  }
  return highestProfit;
};

console.log(bestTimeToBuyAndSellStock([0, 2, 7, 4, 3]));
console.log(bestTimeToBuyAndSellStock([7, 2, 0, 4, 3]));
console.log(bestTimeToBuyAndSellStock([0, 1, 0, 8, 2]));


//given an array of prices. Prices[i] = cost of stock on i day.
//maximize profit by buy stock one day and selling on another day.
//on days of no profit, return 0;
//input: array of numbers
//output: number