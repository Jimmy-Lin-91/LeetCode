function power(num, pow){ //2, 2
  //base case: when pow = 0; return total;
  var total = num; //2
  if (pow === 0) {
    return 1;
  }
  return (total) * power(num, pow-1);//2 * power(2, 3);
}                                         //2 * 2 * power(2, 2);
                                              //2 * 2 * 2 power(2, 1);
                                                //2 * 2 * 2 * 2 power (2, 0)
                                                  //2 * 2 * 2 * 2 * 1;
console.log(power(2, 0));//1
console.log(power(2, 2));//4
console.log(power(2, 4));//16