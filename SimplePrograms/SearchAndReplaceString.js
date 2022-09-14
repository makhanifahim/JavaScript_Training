function myReplace(str, before, after) {
    before.charAt(0) === before.charAt(0).toUpperCase()?
          after=after[0].toUpperCase()+after.slice(1)
    :
        after=after[0].toLowerCase()+after.slice(1);
    
    return str.replace(before,after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");