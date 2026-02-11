// The "Implicit Try..Catch"
// The code inside a Promise constructor (the executor) is wrapped in an invisible try..catch block by the JavaScript engine itself.
//  The "Invisible try..catch" applies to .then(), .catch(), and even .finally().

// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000);

// }).then(function(result) {
// let r 
//   console.log("1",result); // 1

//     setTimeout(() =>{ r = result * 2
//         return r
//     }, 1000);
//     console.log(r)
//     return r


// }).then(function(result) { // (**)

//   console.log("2",result); // 2

//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(result * 2), 1000);
//   });

// }).then(function(result) {

//   console.log("3",result); // 4

// });


// let promise = new Promise((res,rej)=>{

//     console.log("in promise")
//     // return ("yes")
//     // throw new Error("hello")
//     setTimeout(()=>{
//         rej("bye bye")
//     },1000)
//     setTimeout(()=>{
//         throw new Error("hello")
//     },1000)
// })

// promise.then((val)=>{
//     console.log("in then",val)
// }).catch((err)=>{
//     console.log("in catch",err)
// }).then((val)=>{
//     console.log("in then2 ",val)
// })

// // Create the first promise
// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('First promise resolved');
//     }, 1000);
// });

// // Chain the second promise
// const secondPromise = firstPromise.then((message) => {
//     console.log(message); // Log the message from the first promise
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Second promise resolved');
//         }, 1000);
//     });
// });

// // Chain the third promise
// secondPromise.then((message) => {
//     console.log(message); // Log the message from the second promise
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Third promise resolved');
//         }, 1000);
//     });
// }).then((message) => {
//     console.log(message); // Log the message from the third promise
// });





// let a = Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 0)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),

// ]).then((data) => console.log("val",data)).catch(d => console.log("in catch",d));

// console.log(a)
// "use strict";

// let promise =  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))



//  function makefunc(){

//     let data = await promise
//     console.log(data)

// }
// makefunc()

// console.log("outside")




// let promise =  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))

// let data = await promise

// console.log(data)


// (async () => {
//     let promise = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
//     let data = await promise;
//     console.log(data);
// })();


// async function proeer(){
//     let val = await 
// }


// function thisThrows() {
//     throw new Error("Thrown from thisThrows()");
// }

// try {
//     thisThrows();
// } catch (e) {
//     console.error(e);
// } finally {
//     console.log('We do cleanup here');
// }


// async function thisThrows() {
//     throw new Error("Thrown from thisThrows()");
// }

// try {
//     console.log("in try1");
//     await thisThrows()
//     console.log("in try2");

// } catch (e) {
//     console.log("in catchfffffffffffffffffffffffffff");
    
//     console.log("in catch",e);
// } finally {
//     console.log('We do cleanup here');
// }


// async function thisThrows() {
//     throw new Error("Thrown from thisThrows()");
// }

// async function myFunctionThatCatches() {
//     try {
//         console.log('try1');
//         // return   
//         return thisThrows()
//         console.log('try2');

//     } catch (e) {
//          console.log('catch 1');
//         console.error(e);
//          console.log('catch 2');

//     } finally {
//          console.log('final 1');

//         console.log('We do cleanup here');

//          console.log('final 2');
//     }
//     console.log("outside")
//     return "Nothing found";
// }

// async function run() {
//     console.log("run 1");

//     const myValue =  myFunctionThatCatches();

//     // console.log("run 2",Boolean(myValue));
//     return myValue
// }

// run().then(()=>{
//     console.log("in then")
// }).catch(()=>{
//     console.log("in catch")
// });




// function hello(){
// try{
//  return "in try"
// }
// catch(e){
//     return "in catch"
// }
// finally{
//    console.log("in finally")
// }
// console.log("hello")
// return "hello"

// }

// console.log(hello())


// // This is effectively what your code is doing:
// const topLayer = new Promise((resolve) => {
//     const innerLayer = Promise.reject("Error!"); // thisThrows()
//     console.log(innerLayer)
//     resolve(innerLayer); // The return statement
// });

// topLayer.then(inner => {
//     console.log("Top layer resolved!",topLayer);
//     // But inner is still a rejected promise!
// }).catch(e => console.log("in catch",topLayer));


// console.log("Start");

// setTimeout(() => console.log("Timeout completed"), 2000);

// (async function () {
//   console.log("Before await");
  
//   await new Promise(resolve => setTimeout(resolve, 0));
  
//   console.log("After await");
// })();

// console.log("End");





// console.log("1: Script Start");1

// setTimeout(() => {
//     console.log("2: Timeout 0ms");10
// }, 0);

// async function complexFlow() {
//     console.log("3: Inside complexFlow");3
    
//     try {
//         // Tricky Part: We are returning a promise without await
//         return Promise.resolve().then(() => {
//             console.log("4: Internal Microtask");6
//             throw new Error("Boom!");
//         });
//     } catch (e) {
//         console.log("5: Caught Error");
//     } finally {
//         console.log("6: Finally Block");7
//     }
// }

// async function run() {
//     console.log("7: Run Start");2
    
//     const p = complexFlow();
    
//     p.then(() => console.log("8: p Resolved"))
//      .catch(() => console.log("9: p Rejected"));8

//     console.log("10: Run Mid");4

//     await Promise.resolve();
//     console.log("11: After Await");9
// }

// run();

// console.log("12: Script End");5
