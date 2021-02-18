var findSubArrays = (arr, num) => {
  var subSeqArr = [];
  var subArr = [];
  for (var i = 0; i < 3; i++) {
    if (subArr.indexOf(arr[i]) < 0) {
      subArr.push(arr[i]);
    }
  }
  console.log(subArr);
};

console.log(findSubArrays([2, 3, 4, 5], 3));

//find the maximum difference from the smallest difference in all subsequences.
//[2, 3, 4]
//[2, 3, 5]
//[2, 4, 5]
//[3, 4, 5]