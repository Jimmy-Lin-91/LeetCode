function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  //input = string
  //output = num representing longest length of unique characters
  //constraint: O(N);
  //we need some way to track the length of the substring
  //we need some way to track uniqueness of the next value compared to the value in current substring
  if (str.length === 0) {
    return 0;
  }
  var tempLen = 0;
  var longestLen = 0;
  var start = 0;
  var subString = '';
  var findAndSlice = (str1, str2) => {
    for (var i = 0; i < str1.length; i++) {
      var indexToSlice = str1.indexOf(str2) + 1;
      str1 = str1.slice(indexToSlice);
    }
    return str1;
  };
  for (var i = 0; i < str.length; i++) {
    if (subString.indexOf(str[i]) < 0) {
      subString += str[i];
      tempLen++;
    } else {
      subString = findAndSlice(subString, str[i]);
      tempLen = subString.length;
    }
    longestLen = Math.max(longestLen, tempLen);
  }
  return longestLen;
};
console.log(findLongestSubstring('')); //0
console.log(findLongestSubstring('rithmschool')); //7 rithmsc
console.log(findLongestSubstring('thisisawesome'));//6 awesom
console.log(findLongestSubstring('thecatinthehat'));//7 hecatin
console.log(findLongestSubstring('bbbbb'));//1 b
console.log(findLongestSubstring('longestsubstring'));//8 ubstring
console.log(findLongestSubstring('thisishowwedoit'));//6 wedoit