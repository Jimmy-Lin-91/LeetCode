var minSubArrayLen = (arr, num) => {
//track length whenever it exceeds num
//slidingWindow approach to increment by the next value or decrement the first value to reach or overreach num
  if (arr.length === 0 && num) {
    return 0;
  }
  var start = 0;
  var next = 0;
  var total = 0;
  var len = Infinity;
  var curLen = 0;
  while (start < arr.length) {
    if (total < num && next < arr.length) {
      total += arr[next]; //2
      next++; //1
    } else if (total >= num) {
      curLen = next - start;
      if (curLen < len) {
        len = curLen;
      }
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return len;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 2], 7)); //2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); //2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); //3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); //5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); //2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); //0