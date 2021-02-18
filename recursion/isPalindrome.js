var isPalindrome  = (string) => {
  //Palindrome is word same reversed.
  //Objective: compare the return value of slicing off first letter of str and last letter.
  //if string is even, middle two letters should be the same.
  //if string is odd, the two values surrounding middle index should be the same.
  //if string has no length, return true.
  if (string.length === 0) {
    return true;
  }
  var palindrome = false;
  var compareFirstAndLast = (input) => {
    var firstIndex = 0;
    var lastIndex = input.length - 1;
    while (input.length > 1) {
      if (input[firstIndex] === input[lastIndex]) {
        var removeFirstValue = input.slice(1, input.length - 1);
        var removeFirstAndLastValue = removeFirstValue.slice(0, removeFirstValue.length - 2);
        palindrome = true;
        return compareFirstAndLast(removeFirstAndLastValue);
      } else {
        return palindrome;
      }

    }
  };
  compareFirstAndLast(string);
  return palindrome;
};

console.log(isPalindrome('awesome')); //false
console.log(isPalindrome('foobar')); //false
console.log(isPalindrome('tacocat')); //true
console.log(isPalindrome('amanaplanacanalpanama')); //true
console.log(isPalindrome('amanaplanacanalpandemonium')); //false
