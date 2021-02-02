// var binarySearch = (arr, num) =>  {
//   //divide and conquer algorithm.
//   //binary search also uses pointers. One for beginning and one for end. These two points change depending on the boolean you get from comparing the desired number to the middle value.
//   if (arr.length === 0) {
//     return -1
//   }
//   //remember that we are tracking index, not the length.
//   var start = 0; //0 //5 //7
//   var end = arr.length - 1; //8 //8
//   while (start <= end) { //0 < 8 //5 <=8
//     var middleIndex = Math.floor((end+start) /2); //4 //6 //7
//     if (arr[middleIndex] < num) { //5 < 9 //7 < 9 //8 < 9
//       start = middleIndex + 1; //5 //7 //8
//     }
//     if (arr[middleIndex] > num) {
//       end = middleIndex - 1;
//     }
//     if (arr[middleIndex] === num) {
//       return middleIndex;
//     }
//   }
//   return -1;
// };

var binarySearch = (arr, num) => {
  //binary search needs a beginning and an ending index.
  var begin = 0;
  var end = arr.length - 1;
  //we will traverse the array at a given point: the middle most index.
  while (begin <= end) { //inclusive because the value can be on the end.
    //the middle index must change according to the rest of the loop, so write it inside the while.
    var middleIndex = Math.floor((end + begin) / 2); //middle index is ALWAYS max + min /2
    //check if middleIndex value is less than or greater than num
    if (arr[middleIndex] > num) {
      //if true, shift scope of search to start at middle + 1 (exclusive because middle already checked)
      end = middleIndex - 1;
    }
    if (arr[middleIndex] < num) {
      //if this is true, the scope is moved towards the beginning of array.
      begin = middleIndex + 1;
    }
    if (arr[middleIndex] === num) {
      return middleIndex;
    }
  }
  return -1;
};
var test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var num1 = 9;
console.log(binarySearch(test1, num1));
var test2 = [1, 2 ,3 ,4 ,5 ,6, 7, 8, 9, 10];
var num2 = 2;
console.log(binarySearch(test2, num2));