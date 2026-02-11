// 📁 say.js
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye(user) {
  console.log(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // a list

// console.log("Module is evaluated!");

// let a = 20

// const userName = "Alice"; // Private to this file (not in window)
// import { formatName } from './formatter.js'; // ✅ WORKS
// console.log(formatName(userName));

// console.log(module, arguments);

// console.log(import.meta)