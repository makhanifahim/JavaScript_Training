function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs:4,
    eat: function(){
      console.log("eat eat eat");
    },
    describe(){
      console.log("Desription...");
    }
  };