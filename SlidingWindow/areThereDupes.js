function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  var numberCounter = {};
  for (var i = 0; i < args.length; i++) {
    numberCounter[args[i]] = (numberCounter[args[i]] || 0) + 1;
  }
  for (var key in numberCounter) {
    if (numberCounter[key] > 1) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));