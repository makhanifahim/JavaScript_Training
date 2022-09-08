function getIndexToIns(arr, num) {
    arr.sort(function(a, b){return a-b});
    for(let i=0;i<arr.length;i++){
      if(arr[i]>=num){
        return i;
      }
      else if(i==arr.length-1){
        return i+1;
      }
    }
    return 0;
  }
  
  getIndexToIns([40, 60], 50);