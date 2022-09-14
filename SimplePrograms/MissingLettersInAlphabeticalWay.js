function fearNotLetter(str) {
    let arr=str.slice("");
    let notPresent="";
    for(let i=arr.charCodeAt(0);i<=arr.charCodeAt(arr.length-1);i++){
      str.includes(String.fromCharCode(i))?
         String.fromCharCode(i)
         :
            notPresent=notPresent+String.fromCharCode(i);
    }
    return notPresent!=""?notPresent:undefined;
  }
  
  fearNotLetter("abce");