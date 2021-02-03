//First method for subsequence type coding problems: two pointer, increment each depending on matches.
// function isSubsequence(str1, str2) {
// //the two approaches for isSubsequence are:
// //1. Using two pointers, i will increment only when a match is found, when it reaches the length of str1, you've found a sequential match.
//   var i = 0;
//   //j will be the pointer for second string. It will move on if a match isn't found.
//   var j = 0;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) {
//       i++;
//     }
//     if (i === str1.length) {
//       return true;
//     }
//     j++;
//   }
//   return false;
// };

// console.log(isSubsequence('hello', 'hello world')); //true
// console.log(isSubsequence('sing', 'sting')); //true
// console.log(isSubsequence('abc', 'abracadabra')); //true
// console.log(isSubsequence('abc', 'acb')); //false


//Second approach: recursive. If the first letter isn't a match, splice the first value off and keep comparing.
function isSubsequence(str1, str2) {
  //base case
  if (str1.length === 0) {
    return true;
  }
  if (str2.length === 0) {
    return false;
  }
  //cut the first letter off of both string if they match.
  if (str1[0] === str2[0]) {
    return isSubsequence(str1.slice(1), str2.slice(1));
  } else {
    //if they don't match, cut the second string.
    return isSubsequence(str1, str2.slice(1));
  }
  return false;
};

  console.log(isSubsequence('hello', 'hello world')); //true
  console.log(isSubsequence('sing', 'sting')); //true
  console.log(isSubsequence('abc', 'abracadabra')); //true
  console.log(isSubsequence('abc', 'acb')); //false