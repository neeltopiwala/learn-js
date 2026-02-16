// Write a function that uses the call method to print the name of an object.

// 1.
// function printName(){
//     return this
// }
// let obj = {
//     name : "neel"
// }
// console.log(printName.call(obj))

// 2.

// function findMin() {
//   const min = Math.min.apply(null, this);
//   console.log(min);
// }

// const numbers = [10,2,55,44,1];
// findMin.apply(numbers); 


//3
// function printName(){
//     return this
// }
// let obj = {
//     name : "neel"
// }
// let val = printName.bind(obj)
// console.log(val())

//4
// Write a function that uses the call method to add two numbers together.

// function printName(){
//     return this.a + this.b
// }
// let obj = {
//     a : 1,
//     b: 10
// }
// console.log(printName.call(obj))


//5
// function printName(arr1 , arr2){
//     return arr1.concat(arr2)
// }

// console.log(printName.apply(null,[[1,2,3],[4,2]]))

//6
// Write a function that uses the bind method to create a new function that multiplies a number by a specified value.
// function mul(val){
//     return this * val
// }
// let func = mul.bind(5)
// console.log(func(3))

//7
// Write a function that uses the call method to find the length of a string.

// function findLength(){
//     return this.length
// }

// console.log(findLength.call("hello"))

//8
// Write a function that uses the apply method to find the sum of all numbers in an array.
// function sum() {
//   const sum = this.reduce((acc, curr) => acc + curr, 0);
//   return sum
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(sum.apply(numbers))

//9
// function printmessage(prefix, message) {
//   console.log(`${prefix}: ${message}`);
// }
// const logError = printmessage.bind(null, "abc");
// logError("Something went wrong!"); 

//10
// Write a function that uses the call method to convert a string to uppercase.
// function convertUpperCase(){
//     return this.toUpperCase()
// }
// let upper = convertUpperCase.bind("abc");
// console.log(upper())

//11
// Create a function sum that takes in two numbers and returns their sum. Use call to invoke sum with an array [2, 3] as the context and log the result to the console.

// function sum(a, b) {
//   console.log(a + b);
// }

//12
// const person = {
//   name: "John",
// };
// function sayHello() {
//   console.log(`Hello, ${this.name}!`);
// }
// const sayHi = sayHello.bind(person);
// sayHi();

//13
// Write a function greet that takes in a string name and logs "Hello, !". Use apply to pass in an array ["Alice"] as the context and invoke the function.
// function sayHello(name) {
//   console.log(`Hello, ${name}!`);
// }
// sayHello.apply(null,["Alice"]);

//14
// function multiply(a, b) {
//   return a * b;
// }
// const double = multiply.bind(null, 2);
// console.log(double(5)); 


