function translatePigLatin(str) {
    let check = str.match(/^[^aeiou]+/);
    return check!== null
      ?str.replace(/^[^aeiou]+/,"")
          .concat(check)
          .concat("ay")
      :str.concat("way");
  }
  
  translatePigLatin("consonant");