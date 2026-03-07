//3
// Falsy Values (Specific List)
// JavaScript explicitly defines a small set of falsy values. When these are coerced into a boolean, they become false:
// false (the boolean value)
// 0, -0, 0n (BigInt zero)
// "", '', `` (empty strings)
// null (absence of value)
// undefined
// NaN (Not-a-Number)


// Truthy Values
// Any value that is not on the list above is considered truthy. When coerced, they become true. Examples include:
// true
// "0" (string containing zero)
// "false" (string containing "false")
// [] (empty array)
// {} (empty object)
// " " (string with space)
// 1, -1, 3.14 (non-zero numbers)

//4
// Implicit Type Conversion
// Compiler/Interpreter
// Automatic
// 	No explicit code needed

//	Explicit Type Conversion
//	Programmer
// User-defined
// Requires casting syntax/functions

//7
// let rating = 33;

// switch (rating) {
//   case 5:
//     console.log("excellent");
//     break;
//   case 4:
//     console.log("Good");
//     break;
//   case 3:
//     console.log("Average");
//     break;
//   case 2:
//     console.log("Poor");
//     break;
//   case 1:
//     console.log("Very Poor");
//     break;
//   default:
//     console.log("invalid rating");
//     break;
// }

//8
// What is the significance of use strict ?

// Prevents Accidental Global Variables: Without strict mode, assigning a value to an undeclared variable implicitly creates a global variable (e.g., x = 3.14;).

// Strict mode throws a ReferenceError instead, preventing unintended global scope pollution.

// improve security by preventing access global object via this and also provide seprate scope for eval() method.

// Facilitates Optimization: Code written in strict mode can sometimes run faster because the stricter rules help JavaScript engines perform better optimizations by simplifying how variable names map to definitions.

// Future-Proofs Code: It prohibits some syntax likely to be defined in future versions of ECMAScript (e.g., using future reserved keywords like public, static, yield as variable names), ensuring better compatibility with future language updates.



