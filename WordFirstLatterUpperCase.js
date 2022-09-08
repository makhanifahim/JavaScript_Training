function titleCase(str) {
    var sapStr=str.split(" ");
    const updatedstr = [];
    for(let i=0;i<sapStr.length;i++){
            updatedstr[i]=sapStr[i][0].toUpperCase()+sapStr[i].slice(1).toLowerCase();
    }
    return updatedstr.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));