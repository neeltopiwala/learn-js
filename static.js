// class User {
// static fullName = "hi"
//   static staticMethod() {
//     console.log(this === User);
//   }
//   sayMsg(){
//     console.log("hello")
//   }
//   fullName = "bye"
// }

// let user = new User()

// // console.log(user.staticMethod())
// // console.log(User.staticMethod())
// console.log(User.name)
// console.log(user.fullName)


// console.log(8 instanceof Object)

// "use strict"
// let json = '{ "age": 30 }'; // incomplete data

// try {
//   user = JSON.parse(json); // <-- forgot to put "let" before user

//   // ...
// } catch (err) {
//   console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
//   // (no JSON Error actually)
// }


function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  console.log(`Cool, the script ${script.src} is loaded`);
  console.log( _ ); // _ is a function declared in the loaded script
});

console.log("hello")