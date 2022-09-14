function whatIsInAName(collection, source) {
  const arr = Object.keys(source);
  // Only change code below this line
  
  

  // Only change code above this line
  return collection.filter(obj => arr
    .map(key => obj.hasOwnProperty(key)&& obj[key]===source[key])
    .reduce((a, b) => a && b));
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);