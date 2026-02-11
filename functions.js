// let userName = 'John'; // global scope

// function showMessage() {
//  let userName = "Bob"; // local scope
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }
// console.log( userName ); 
// showMessage();
// console.log( userName );


// function callNewFunction(){
//     console.log("hello world")
//     return "neel"
// }
// function showMessage(from, text = () => callNewFunction()) {
//    console.log( from + ": ")


//    text("") 
// }
// showMessage("hello")


// A function with an empty return or without it returns undefined

// function callNewFunction(){
//     console.log("hello world1")
// }
// function callNewFunction(){
//     console.log("hello world2")
//     return "hi"
// }
// function callNewFunction(){
//     console.log("hello world3")
//     return 
// }
// callNewFunction()
// console.log(Boolean(callNewFunction()))


// function callNewFunction(){
//     console.log("hello world3")
//     return 
// }

// let func = function (){
//     console.log("hello world1")
//     return 
// }

// let arrowFunc = ()=>{
//     console.log("arrow")
//     return
// }
// console.log(callNewFunction())
// console.log(func())
// console.log(arrowFunc())

// function fullName(){
//     console.log("i am fullname")
// }

// console.log(this)
// console.log(window)
// console.log(Window)


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   greet: () => {
//     setTimeout(function(){
//       console.log(`Hello, ${this.fullName()}!`);
//     }, 1000);
//   },
// };

// person.greet(); // Output: Hello, John Doe!

// function func2(){
//     console.log("hi")

//     return function hello(){
//         console.log("hello")
//     }
// }

// function func1(args = func2() ){
//     console.log(args.name)
// }
// func1()


// function has many in build properties like name,length, arguments[] inner iteratable element ,also we can make custom properties
// function makeCounter(){

//     function counter(){
//         let count = 0
//         console.log(count)
//         console.log(counter.count)

//         return counter.count++
//     }
//     counter.count = 0
//     return counter

// }
// let count = makeCounter()

// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())


// let value = "hi"
// function getFunc() {
//   let value = "test2323";

//   let func = new Function(`console.log("${value}")`);

//   return func;
// }

// getFunc()(); 

// function makeCounter(){
//    function counter(){
//         return counter.count 
//     }
//     counter.set = function(val){
//          counter.count = val
//     }
//     counter.decrement = function(){
//          counter.count -= 1
//     }
//     return counter
// }

// let counter = makeCounter()
// counter.set(3)
// counter.decrement()
// counter.decrement()
// console.log(counter.count)


// Arrow functions:

// Do not have this
// Do not have arguments
// Can’t be called with new
// They also don’t have super, but we didn’t study it yet. We will on the chapter Class inheritance