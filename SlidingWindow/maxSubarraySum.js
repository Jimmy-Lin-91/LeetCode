// var maxSubarraySum = (arr, num) => {
//   var maxSum = 0;
//   var tempSum = 0;
//   //sliding window problem requires you to build the window. Window is num because we want to compare each three subarray.
//   for (var i = 0; i < num; i++) {
//     //the window is the first set of integers added together.
//     maxSum += arr[i];
//   }
//   //set tempSum to MaxSum to compare which is greater. You have to set it because the first three can be the LARGEST
//   tempSum = maxSum;
//   //write another loop to slowly slide the window down 1 index at a time. To do this, subtract the first number, add the next number.
//   //start at the end of the last loop
//   for (var i = num; i < arr.length; i++) {
//     var firstNumberIndex = i - num; //it starts at 3-3 = 0, we remove arr[0]. Then it goes to 4-3 = 1, we remove arr[1].
//     //subtract first number and add next index.
//     tempSum = tempSum - arr[firstNumberIndex] + arr[i] //firstNumber = arr[ 3 - 3 ]. arr[i] = arr
//     maxSum = Math.max(maxSum, tempSum); //use math.max to check the highest of two values.
//   }
//   return maxSum;
// };
// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3 ));
function maxSubarraySum(arr, num){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < num) {
      return null;
  }
  var sum = 0;
  var tempSum = 0;
  for (var i = 0; i < num; i++) {
    sum += arr[i];
  }
  tempSum = sum; //300
  for (var i = num; i < arr.length; i++) { //2
      tempSum = tempSum - arr[i - num] + arr[i];
      if (tempSum > sum) {
        sum = tempSum;
      }
  }
  return sum;
};
console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
console.log(maxSubarraySum([2, 3], 3)); //null