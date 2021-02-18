function someRecursive(arr, callback){
  // add whatever parameters you deem necessary - good luck!
  //objective: use first value as input and remove from array for recursion.
  var bool = false;
  var removeFirstAndCheck = (input, callback) => {
    if (input.length === 0) {
      return bool;
    }
    if (callback(input[0]) === true) {
      bool = true;
      return bool;
    }
    console.log(input.slice(1, input.length));
    return removeFirstAndCheck(input.slice(1, input.length), callback);
  }
  removeFirstAndCheck(arr, callback);
  return bool
};
var isOdd = (input) => {
  if (input % 2 === 0) {
    return false;
  }
  return true;
};

console.log(someRecursive([1, 2, 3, 4], isOdd)); //true
console.log(someRecursive([4, 6, 8, 9], isOdd)); //true
// console.log(someRecursive([4, 6, 8], isOdd));//false
// console.log(someRecursive([4, 6, 8], val => val > 10)); //false