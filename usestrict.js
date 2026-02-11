// "use strict"
// 1.
// const obj = {};
// Object.defineProperty(obj, 'x', { value: 0, writable: false });
// console.log(obj)
// obj.x = 9;
// console.log(obj)

// 2.
// function catchTheProblem() {
//   'use strict';

//   for ( counter = 0; counter < 10; counter++) {
//     console.log('Catch me if you can!');
//   }
//    console.log(counter)

// }

// catchTheProblem(); // ReferenceError: counter is not defined

// 3.
// let misspelledVariable;
// misspelleVariable = 9;

// 4.
// 'use strict';
// let aVariable = 9;
// console.log(aVariable)
// delete aVariable;
// console.log(aVariable)

//5.
// function test(arg1, arg1) {} // This will cause an error

// 6.
// name = "hello"

// 7.
// function defineNumber() {
//   count = 123;
// }
// defineNumber();
// console.log(count);


// 8.

// Source - https://stackoverflow.com/q
// Posted by Qantas 94 Heavy, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-23, License - CC BY-SA 4.0

// 'use strict';
// eval('var a = 1; console.log(a);');
// console.log(a); // ReferenceError: a is not defined


/*
Is it "strictly" necessary?
Adding 'use strict' in JavaScript is still beneficial and recommended, but it is no longer strictly necessary in all cases:

Modules: The entire contents of JavaScript modules are automatically in strict mode, without needing the 'use strict' statement. This applies to ES6 modules as well as Node.js CommonJS modules.

Classes: Code within class definitions is also automatically in strict mode, even without 'use strict'.
While 'use strict' is no longer mandatory in all contexts due to the automatic strict mode enforcement in modules and classes, it is still widely recommended as a best practice, especially for core JavaScript files, libraries, and when working with older browser environments or legacy code.

*/
