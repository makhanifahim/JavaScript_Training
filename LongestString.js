function findLongestWordLength(str) {
    let words=str.split(" ");
    let longest=words[0];
    for(let i=1;i<words.length;i++){
      if(words[i].length>longest.length){
        longest=words[i];
      }
    }
    return longest.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");