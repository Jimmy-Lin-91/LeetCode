//climbing a staircase; takes n steps to reach the top.
//can step one or two steps.
//how many ways can you climb to the top.
//constraint  1<n<45

var climbStairs = (num) => { //3
  var stepsCounter = 0;
  var numberOfWays= 0; //1
  var innerClimb = (input) => { //3
    if (input === num) { //3 === 3
      numberOfWays++; //1
    }
    if (input < num) { //3 < 3
      input++; //3
      innerClimb(input); //innerClimb(3); //end
      input++; //1
      innerClimb(input);
    }
  }
  innerClimb(stepsCounter);
  return numberOfWays;
};

console.log(climbStairs(20)); //1
console.log(climbStairs(21)); //2
console.log(climbStairs(22)); //3
console.log(climbStairs(23)); //5
console.log(climbStairs(24));