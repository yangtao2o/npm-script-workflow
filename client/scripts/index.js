function Person(name, age) {
  this.name = name;
  this.age = age;
} 
Person.prototype.say = function(name) {
  Person.call(this, name);
  console.log('Say, your name is ' + this.name);
}

var myself = new Person('yangtao', 27);