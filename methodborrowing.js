function getArgsArray() {
  // arguments is an array-like object, but lacks array methods
  // Borrow the slice method from Array.prototype to convert it
  const args = Array.prototype.slice.call(arguments,1); 
  console.log(args);
  return args;
}

getArgsArray(1, 2, 3); // Outputs [1, 2, 3]



// call(),apply() and bind()
// const person = {
//   name: 'Alice',
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// const greetLater = person.greet;
// greetLater()


// let user = {
//   firstName: "John"
// };

// function func(phrase) {
//   console.log(phrase + ', ' + this.firstName);
// }

// // bind this to user
// let funcUser = func.bind(user,"hello");

// funcUser();


// function defer(f, ms) {
//   return function() {
//     setTimeout( f.bind(null, ...arguments), ms);
//     setTimeout(() => f.apply(null, arguments), ms);
//   };
// }

// function sayHi(who) {
//   console.log('Hello, ' + who);
// }

// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("John"); // Hello, John after 2 seconds


// call and apply run at the time 
// call = functionName.call(this context or any object , comma seprated arguments )
// apply = functionName.apply(this context or any object , array that contain all arguments )
// // bind return new function with bounded of this value
// bind = functionName.bind(this context or any object , comma seprated arguments )
//  after some code 

//  we run bind()
