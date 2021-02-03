function averagePair(arr, num){
  // add whatever parameters you deem necessary - good luck!
  //because it is sorted, the numbers on the left, when going up sequentially, will increase the average.
  //the numbers starting from the end will be decremented if the average is too large.
  var start = 0;
  var end = arr.length - 1;
  while (start < end) {
    var average = (arr[start] + arr[end]) / 2;
    if (average === num) {
      return true;
    }
    if (average < num) {
      start++;
    } else {
      end--;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));