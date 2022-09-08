function mutation(arr) {
    let first=arr[0].slice().toLowerCase();
    let second=arr[1].slice().toLowerCase();
    for(let i=0;i<second.length;i++){
      let len=0;
      for(let j=0;j<first.length;j++){
        if(second[i]==first[j]){
          len++;
        }
      }
      if(len==0){
        return false;
      }
    }
    return true;
  }
  
  mutation(["hello", "hey"]);