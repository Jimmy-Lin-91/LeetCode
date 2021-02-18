function capitalizeFirst (array) {
  // add whatever parameters you deem necessary - good luck!
  var resultArr= [];
  var getFirstElementAndCapitalize = (input) => {
    if (input.length === 0) {
      return resultArr;
    }
    var firstLetter = input[0][0];
    var capitalizedLetter = firstLetter.toUpperCase()
    var capitalizedWord = capitalizedLetter + input[0].slice(1, input[0].length);
    resultArr.push(capitalizedWord);
    return getFirstElementAndCapitalize(input.slice(1, input.length));
  };
  getFirstElementAndCapitalize(array);
  return resultArr;
};

console.log(capitalizeFirst(['car','taco', 'banana']));