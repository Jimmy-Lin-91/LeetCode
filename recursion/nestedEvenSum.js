function nestedEvenSum (obj) {
  var sum = 0;
  var fallThroughObject = (input) => {
    for (key in input) {
      if (input[key] === 2) {
        sum += 2;
      } else if (typeof input[key] === 'object') {
        fallThroughObject(input[key]);
      }
    }
  }
  fallThroughObject(obj);
  return sum;
};



var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));