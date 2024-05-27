class Animal {
  constructor(name, leg, speaks) {
    this.name = name;
    this.leg = leg;
    this.speaks = speaks;
  } //attributes -- in classes
  //functions -- in classes
  speak() {
    //can be called on the object but not on the class
    console.log("hi there " + this.speaks);
  }

  //static functions -- associated with classes itself and not the objects
  //it can be called as ClassName.function() --eg: Animal.myType();
  static myType() {
    console.log("I am an animal");
  }
}

let dog = new Animal("dog", 4, "bhow bhow"); //objects of the class
let cat = new Animal("cat", 4, "meow meow");
dog.speak(); // since speak is not static so can only be called as Object.function();
Animal.myType();
