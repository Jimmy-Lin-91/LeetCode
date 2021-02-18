function fib(n) { //4
  if (n <= 2) { //false
    return 1;
  }
  return fib(n - 1) + fib(n - 2); //fib(3) + fib(2);
                                      //(fib(2) + fib(1)) + fib(2)
                                        // 1 + 1 + 1
}

console.log(fib(4)); //3
// console.log(fib(10));//55
// console.log(fib(28));//317811
// console.log(fib(35));//9227465