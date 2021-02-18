function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  //remove edge case where strings are of different words
  if (str1.length !== str2.length) {
    return false;
  }
  //create object to keep track of letter and for constant time lookup
  var letterCounter = {};
  // var letterCounter2 = {}; edited out. One object is enough for compare.
  // var isAnagram = false; edited out. We will use a falsey value to check instead
  for (var i = 0; i < str1.length; i++) {
      letterCounter[str1[i]] = (letterCounter[str1[i]] || 0) + 1;
  }
  // for (var zal in str2) {
  //     letterCounter2[str2[zal]] = (letterCounter2[str2[zal]] || 0) + 1;
  // }
  // for (var key in letterCounter) {
  //     for (var lee in letterCounter2) {
  //       if (key === lee && letterCounter[key] === letterCounter2[lee]) {
  //         isAnagram = true;
  //       }
  //     }
  // }
  //loop through the second string and compare.
  for (var i = 0; i < str2.length; i++) {
    //assign variable to avoid typing
    var letter = str2[i];
    //if the letter in letterCounter is ever 0 or undefined at this point
    if (letterCounter[letter] === 0 || letterCounter[letter] === undefined) {
      //return false
      return false;
    } else {
      //else subtract from value
      letterCounter[letter]--;
    }
  }
  return true;
}
//the trick is to convert 1 to object and use that as the lookup for the second string.

console.log(validAnagram('aaz', 'zza')); //false
console.log(validAnagram('anagram', 'nagaram')); //true
console.log(validAnagram('rat', 'car'));//false