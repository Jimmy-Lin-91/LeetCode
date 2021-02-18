function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  //edge case: different length string automatically means numbers don't appear in same frequency.
  if (num1.toString().length !== num2.toString().length) {
    return false;
  }
  var numberCounter = {};
  var stringNum = num1.toString();
  var stringNum2 = num2.toString();
  for (var i = 0; i < stringNum.length; i++) {
    numberCounter[stringNum[i]] = (numberCounter[stringNum[i]] || 0) + 1;
  }
  //take string index by index and compare to object. Remember: simply plugging in each value into the numberCounter will look up it's value aka occurrence. 
  for (var i = 0; i < stringNum2.length; i++) {
    if (numberCounter[stringNum2[i]]) {
      numberCounter[stringNum2[i]]--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));



