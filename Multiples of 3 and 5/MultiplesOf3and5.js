function multiplesOf3and5(number) {
  let sum = 0;
  for (let index = 0; index < number; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }
  return sum;
}

console.log(multiplesOf3and5(10));
