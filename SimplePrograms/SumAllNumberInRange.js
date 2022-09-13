function sumAll(arr) {
    let tot=0;
    let max=arr.reduce(function(a,b){
      return Math.max(a,b);
    });
    var min = arr.reduce(function (a, b) {
        return Math.min(a, b);
    });
    for(let i = min;i<=max;i++){
      tot+=i;
    }
    return tot
  }
  
  sumAll([1, 4]);