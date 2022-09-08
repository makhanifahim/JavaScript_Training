function repeatStringNumTimes(str, num) {
    let retVal="";
    if(num>0){
      for(let i=0;i<num;i++){
        retVal=retVal+str;
      }
      return retVal;
    }
    else{
      return "";
    }
    
  }
  
  console.log(repeatStringNumTimes("abc", 3));