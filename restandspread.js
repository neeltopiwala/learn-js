
// // let arr = [1,2,3,4,5,33,3,2,2]

// // let set = new Set(arr)

// // console.log(Math.max(...set))

// // function testing(){
// //     console.log(arguments)
// // }
// // testing('helo',null,12)
// // let a = 11
// // var a = 10

// // {
// //     console.log("hello world")
// //     var a = 10
// //     console.log(a)
// // }

// // console.log(a)

// // let pharse = "neel"

// // function say(name){
// //     console.log(name,pharse)
// // }

// // say("world")

// function makeCounter(){
//     let count = 0;

//     return function(){
//         return count++
//     };
// }

// let counter = makeCounter()
// console.log(counter())
// console.log(counter())
// counter = null; // ...and now the memory is cleaned up
// console.log(counter())

// let val = makeCounter()
// console.log(val())
// console.log(val())


// function createFixed() {
//     let largeObject = new Array(1000000).fill('leaky data');

//     // Use the required value, not the entire object.
//     const importantValue = largeObject[0];

//     // Only keep the necessary data in the closure.
//     return function fixedFunction() {
//         console.log(importantValue);
//         // largeObject = null
//     };
// }

// const fixedClosure = createFixed();
// fixedClosure()
// fixedClosure()

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // create a shooter function,
      
      console.log( n ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.