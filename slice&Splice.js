function frankenSplice(arr1, arr2, n) {
    let locVar = arr2.slice();
    locVar.splice(n, 0, ...arr1);
    return locVar;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);