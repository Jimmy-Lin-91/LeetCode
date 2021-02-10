var productOfArray = (arr) => {
  var total = 1;
  var multiplyByFirstIndex = (arr) => {
    if (arr.length === 0) {
      return total;
    }
    total *= arr[0];
    var tempArr = arr.splice(1, arr.length - 1);
    return multiplyByFirstIndex(tempArr);
  };
  multiplyByFirstIndex(arr);
  return total;
  // if (arr.length === 0) {
  //   return 1;
  // }
  // return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([1, 2, 3])); //6
console.log(productOfArray([1, 2, 3, 10])); //60