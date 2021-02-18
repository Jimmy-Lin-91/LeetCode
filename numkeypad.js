function numKeypadSolutions(wordlist, keypads) {
  var res = [];
  //change keypads into object with keys = letter and value = number it appears.
  //change each word into object with keys
    //iterate over keys, if array of jumbled words does not include a letter, push a zero into it.
  var res = [];
  var getLettersForObject = (array) => {
    var arrObj = [];
    for (var i = 0; i < array.length; i++) {
      var single = array[i];
      var letterCounter = {};
      for (var z = 0; z < single.length; z++) {
        letterCounter[single[z]] = (letterCounter[single[z]] || 0) + 1;
      }
      arrObj.push(letterCounter);
    }
    return arrObj;
  }
  var lettersOfKeyPads = getLettersForObject(wordlist);
  var lettersOfWords = getLettersForObject(keypads);

}
var t1 = ['APPLE', 'PLEAS', 'PLEASE'];
var t2 = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'];//[0, 1, 3, 3, 0]

console.log(numKeypadSolutions(t1, t2)); //[0, 1, 3, 3, 0]