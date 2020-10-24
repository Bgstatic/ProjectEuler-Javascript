function smallestMult(number) {
  var counter = 0;
  var smallestNumber = [];

  for (let index = 1; ; index++) {
    for (let divider = 1; divider <= number; divider++) {
      if (index % divider !== 0) {
        break;
      } else {
        counter++;
      }
    }
    if (counter === number) {
      return index;
    }
    counter = 0;
  }
}

smallestMult(10)
