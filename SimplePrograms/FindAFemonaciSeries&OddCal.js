function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let tot = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        tot += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
    return tot;
  }
  
  sumFibs(4);
  