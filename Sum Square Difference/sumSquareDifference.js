function sumSquareDifference(number) {
  var squaredSum = 0;
  var sumOfSquare = 0;

  // n(n+1)(2n+1) / 6
  squaredSum = (number * (number + 1) * (2 * number + 1)) / 6;

  // 1 + 2 + ... n => n(n+1) / 2
  var sum = (number * (number + 1)) / 2;
  sumOfSquare = Math.pow(sum, 2);

  var result = sumOfSquare - squaredSum;

  return result;
}

console.log(sumSquareDifference(10));
