function largestOfFour(arr) {
    let largest=[];
    for(let i =0;i<arr.length;i++){
      let large=arr[i][0];
      for(let j=1;j<arr[i].length;j++){
        if(arr[i][j]>large){
          large=arr[i][j];
        }
      }
      largest.push(large)
    }
    return largest;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);