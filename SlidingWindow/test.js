var findAndSlice = (str1, str2) => {
  for (var i = 0; i < str1.length; i++) {
    var indexToSlice = str1.indexOf(str2);
    console.log(indexToSlice);
    str1 = str1.slice(indexToSlice + 1);
  }
  return str1;
};

console.log(findAndSlice('longestsubstring', 's'));