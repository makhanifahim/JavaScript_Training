function destroyer(arr) {
    for(let i=0;i<arr.length;i++){
      for(let j=1;j<arguments.length;j++){
        if(arr[i]==arguments[j]){
          arr.splice(i,1);
          i--;
        }
      }
    }
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);