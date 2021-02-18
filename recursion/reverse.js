function reverse(str) {
  var finalS = ''; //''
  const addLastLetter = (input) => {
    if (input.length === 0) {
      return finalS;
    };
    finalS += input[input.length - 1];
    var newInput = input.slice(0, input.length - 1);
    return addLastLetter(newInput);
  };
  addLastLetter(str);
  return finalS;
};
//base case = if inputString or Array's length === 0, return finalS;
//add last letter of strArr to finalS every recursion.
// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }
console.log(reverse('awesome'));
console.log(reverse('rithmschool'));