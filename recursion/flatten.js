function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  var finalArr = [];
  var fallThroughArray = (input) => {
    if (typeof input === 'number') {
      finalArr.push(input);
    } else {
      for (var i = 0; i < input.length; i++) {
        fallThroughArray(input[i]);
      }
    }
  }
  fallThroughArray(arr);
  return finalArr;
};

console.log(flatten([1, 2, 3, [4, 5]])); //[1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); //[1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); //[1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); //[1,2,3]
