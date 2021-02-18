function capitalizeWords (arr) {
  // add whatever parameters you deem necessary - good luck!
  var resultArr = [];
  var takeFirstAndCapitalize = (input) => {
    if (input.length === 0) {
      return resultArr;
    }
    var firstCapitalizedWord = input[0].toUpperCase();
    resultArr.push(firstCapitalizedWord);
    return takeFirstAndCapitalize(input.slice(1, input.length));
  };
  takeFirstAndCapitalize(arr);
  return resultArr;
}


let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));