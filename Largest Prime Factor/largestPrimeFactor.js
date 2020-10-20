function largestPrimeFactor(number) {
  var factors = [];
  var result = 0;

  for (var i = 2; i <= number; i++) {
    while (number % i === 0) {
      factors.push(i);
      number /= i;
    }
  }

  result = Math.max(...factors);

  return result;
}

console.log(largestPrimeFactor(13195));
