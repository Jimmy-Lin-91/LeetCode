function numKeypadSolutions(wordlist, keypads) {
  var res = [];
  //change keypads into object with keys = letter and value = number it appears.
  //change each word into object with keys
    //iterate over keys, if array of jumbled words does not include a letter, push a zero into it.
    var numOfLettersToMatch = wordlist[0].length;
  var convertArrayToObj = (array) => {
    var arrayOfObj = []
    for (var i = 0; i < keypads.length; i++) {
      var letterCounter = {};
      var singleKeyPad = keypads[i];
      for (var z = 0; z < singleKeyPad.length; z++) {
        letterCounter[singleKeyPad[z]] = (letterCounter[singleKeyPad[z]] || 0) + 1;
      }
      arrayOfObj.push(letterCounter);
    }
    return arrayOfObj;
  };
  var letterObj = convertArrayToObj(keypads);
  for (var i = 0; i < letterObj.length; i++) {
    console.log(letterObj);
    var match = 0;
  }
}
var t1 = ['APPLE', 'PLEAS', 'PLEASE'];
var t2 = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'];

console.log(numKeypadSolutions(t1, t2));