function nthPrime(n) {
  var primeCounter = 0;
  for (let index = 0; ; index++) {
    if (isPrime(index)) primeCounter++;

    if (primeCounter === n) return index;
  }
}

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

console.log(nthPrime(10001)):
