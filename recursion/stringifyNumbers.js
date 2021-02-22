var stringifyNumbers = (obj) => {

  var fallThroughObj = (input) => {
    if (typeof input === 'number') {
      return input.toString();
    } else if (typeof input === 'object' && input !== null) {
      for (var key in input) {
        return fallThroughObj(input[key]);
      }
    } else if (Array.isArray(input)) {
        for (var i = 0; i < input.length; i++) {
          return fallThroughObj(input[i]);
        }
      } else {
        return input;
      }
  };
  fallThroughObj(obj);
  return obj;
};

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}


console.log(stringifyNumbers(obj));