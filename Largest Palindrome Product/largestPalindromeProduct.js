function largestPalindromeProduct(n) {
  var lowerBoundString = "1";
  var upperBoundString = "9";
  var palindrome = [];
  for (let index = 1; index < n; index++) {
    lowerBoundString += "0";
    upperBoundString += "9";
  }

  var lowerBound = parseInt(lowerBoundString);
  var upperBound = parseInt(upperBoundString);

  for (let firstNumber = lowerBound; firstNumber < upperBound; firstNumber++) {
    for (
      let secondNumber = upperBound;
      secondNumber > lowerBound;
      secondNumber--
    ) {
      let number = firstNumber * secondNumber;
      let reversedNumber = number.toString().split("").reverse().join("");

      if (number.toString() === reversedNumber) {
        palindrome.push(number);
      }
    }
  }
  return Math.max(...palindrome);
}

console.log(largestPalindromeProduct(2));
