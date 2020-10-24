function fibonacci(num) {
  var i;
  var fib = [];
  let sum = 0;

  fib[0] = 0;
  fib[1] = 1;

  for (i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    if (fib[i] % 2 === 0 && fib[i] <= num) {
      sum += fib[i];
    }
  }

  console.log("Sum:", sum);
}

fibonacci(10)
