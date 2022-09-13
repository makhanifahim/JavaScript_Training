function checkPositive(arr) {
    // Only change code below this line
    let a= arr.some(function(check){
      return check>0;
    });
    return a;
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);