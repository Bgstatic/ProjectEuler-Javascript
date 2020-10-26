function specialPythagoreanTriplet(n) {
  let sumOfabc = n;
  let a = 0;
  let b = 0;
  let c = 0;
  let result = 0;
  var possibleResults = [];

  for (let a = 1; a <= sumOfabc; a++) {
    for (let b = sumOfabc; b >= 1; b--) {
      c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      if (Number.isInteger(c)) {
        if (a + b + c === sumOfabc) {
          result = a * b * c;
          possibleResults.push(result);
        }
      }
    }
  }
  return possibleResults;
}

console.log(specialPythagoreanTriplet(24));
