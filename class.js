// The basic class syntax looks like this:

// class MyClass {
//   prop = value; // property

//   constructor(...) { // constructor
//     // ...
//   }

//   method(...) {} // method

//   get something(...) {} // getter method
//   set something(...) {} // setter method

//   [Symbol.iterator]() {} // method with computed name (symbol here)
//   // ...
// }

// when code load js engine show that it is class block so It creates a function named MyClass. 

// simultaneously creates a blank object and assigns it to MyClass.prototype

// It "populates" that prototype object with all your methods, getters, setters, and the .constructor link.


// let obj = new MyClass() after this line 

// JavaScript creates a new empty object.

// links this new object's internal [[Prototype]] to the MyClass.prototype






// class User {
//   constructor(name) { this.name = name; }
//   sayHi() { alert(this.name); }
// }


// console.log(typeof User)


// function User(name) {
//   this.name = name;
// }

// User.prototype.sayHi = function() {
//   console.log(this.name);
// };

// console.log(User); 

// let user = new User("John");

// // Let's loop through all properties
// for (let key in user) {
//   console.log(key); 
// }

// OUTPUT:
// name
// sayHi  <-- It shows up!


// class User {

//   constructor(name) {
//     // invokes the setter
//     console.log("in constructer")
//     this.name = name;
//   }

//   get name() {
//     return this._name; 
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return;
//     }
//     console.log("in setter")

//     this.name = value; // why we write _name instand of name because it if we put name so it will trigger setter again and again so it will go in infinity loop
//   }

// }

// let user = new User("John");
// console.log(user); // John

// // user = new User(""); // Name is too short.



//  class Clock {
//     constructor({ template }) {

//         let timer;

//         function render() {
//             let date = new Date();

//             let hours = date.getHours();
//             if (hours < 10) hours = '0' + hours;

//             let mins = date.getMinutes();
//             if (mins < 10) mins = '0' + mins;

//             let secs = date.getSeconds();
//             if (secs < 10) secs = '0' + secs;

//             let output = template
//                 .replace('h', hours)
//                 .replace('m', mins)
//                 .replace('s', secs);

//             console.log(output);
//         }

//         this.stop = function () {
//             clearInterval(timer);
//         };

//         this.start = function () {
//             render();
//             timer = setInterval(render, 1000);
//         };

//     }
// }
  
// let clock = new Clock({template: 'h:m:s'});
// clock.start();

//   class Clock{
//     constructor({ template }){
//         this.template = template
//     }
//      render = () => {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     };

//     // stop = function() {
//     //   clearInterval(timer);
//     // };
  
//     start = () => {
//         console.log(this.render)
//       this.render();
//        setInterval(this.render, 1000);
//     };
//   }

//     let clock = new Clock({template: 'h:m:s'});
//   clock.start();