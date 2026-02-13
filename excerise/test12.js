// var readline = require("readline").createInterface(process.stdin);
// var lines = [];
// var lineNumber = -1;
// // readline.on("line", readInputs);

// function readInputs(line) {
//   lines.push(line);
//   readline.close();

//   //   lineNumber++;
//   //   if (lineNumber === 5) {
//   //     readline.close();
//   //   }
// }
//  function getInput(getter, msg) {
//   console.log(`${msg}`);
//   readline.on("line", getter);
// }
// getInput(
//   readInputs,
//   "How many french fries (60rs per piece) do you want to order ?",
// );
// getInput(
//   readInputs,
//   "How many french fries (60rs per piece) do you want to order ?",
// );
// getInput(
//   readInputs,
//   "How many french fries (60rs per piece) do you want to order ?",
// );
// getInput(
//   readInputs,
//   "How many french fries (60rs per piece) do you want to order ?",
// );
// getInput(
//   readInputs,
//   "How many french fries (60rs per piece) do you want to order ?",
// );

//4
// var readline = require("readline").createInterface(process.stdin);
// readline.on("line", readInputs);
// console.log("Do you drink tea/coffee")
// function readInputs(line) {
//   printBeverage(line);
//   readline.close();
// }

// function printBeverage(i) {
//   i = i.toLowerCase();
//   switch (true) {
//     case i === "tea":
//       console.log("tea");
//       break;
//     case i === "coffee":
//       console.log("coffee");
//       break;

//     default:
//       console.log("water");
//       break;
//   }
// }

//6
// let num1 = prompt("enter first number")
// let num2 = prompt("enter second number")

// let sum = Math.abs(num1-num2)

// if(sum > 40){
//     alert(sum * 2)
// }else{
//     alert(sum * 3)
// }

//8
// let num1 = prompt("enter first number");
// let num2 = prompt("enter second number");
// let num3 = prompt("enter thirt number");
// let num4 = prompt("enter fourth number");
// let num5 = prompt("enter fifth number");

// let arr = [num1, num2, num3, num4, num5];
// let obj = {};
// let flag = false
// for (let i = 0; i <= arr.length - 1; i++) {
//   if (!obj[arr[i]]) {
//     obj[arr[i]] = 0;
//   }
//   obj[arr[i]] += 1;
//   if(obj[arr[i]]>1){
//     flag = true
//     break;
//   }
// }

// if(flag){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }

//9

// let n = 40

// if(n%10===0 && n%20===0){
//     console.log(n*51)
// }
// else{
//     console.log(n*59)
// }

//10

// let str = "hello232323232323"

// if(str.length>15){
//     for(let i=0;i<=str.length;i++){
//         console.log(`2*${i}=${2*i}`)
//     }
// }
// else{
//     console.log("no")
// }

//11
// let str = "hello"
// str = str.split("").reverse().join("")
// console.log(str)

//12
// let str = "helloo";
// const obj = {};
// for (let i of str) {
//   obj[i] = (obj[i] || 0) + 1;
// }
// for (let i in obj) {
//   if (obj[i] > 1) {
//     console.log(`${i}: ${obj[i]}`);
//   }
// }

//13
// let str = "helloo";
// const obj = {};
// for (let i of str) {
//   obj[i] = (obj[i] || 0) + 1;
// }
// for (let i in obj) {
//   if (obj[i] > 1) {
//     console.log("yes");
//     break;
//   }
// }

//14
// let str = "helldddoO";
// const obj = {}
// let regex = /[aeiou]/i
// for (let i of str) {
//     if(regex.test(i)){
//         obj["vowel"] = (obj["vowel"] || 0) + 1
//     }
//     else{
//      obj["constant"] = (obj["constant"] || 0) + 1
//     }
// }
// console.log(`vowels : ${obj.vowel} and constant : ${obj.constant}`)

//17
// How to remove the duplicate character from String
// let str = "hello world"
// let output = ""
// let obj = {}

// for(let i=0;i<str.length;i++){
//     if(!obj[str[i]]){
//         obj[str[i]] = 1
//         output += str[i]
//     }
// }

// console.log(output)

// let set = new Set(str)
// console.log(set)

//18
// function countChars(str) {
//   let count = 0;
//   while (str[count] !== undefined) {
//     count++;
//   }
//   return count;
// }

// console.log(countChars("JavaScript")); // 10

//21
// Write a program to find the first non-repeated character in a string.

// let str = "hello worldh";
// let obj = {};

// for (let i = 0; i < str.length; i++) {
//   if (!obj[str[i]]) {
//     obj[str[i]] = 0;
//   }
//   obj[str[i]] += 1;
// }

// for (let i in obj) {
//   if (obj[i] === 1) {
//     console.log(i);
//     break;
//   }
// }

// console.log(obj);

//22
// let str = "helldddoO";
// let output = ""
// const obj = {}
// let regex = /[aeiou]/i
// for (let i of str) {
//     if(!regex.test(i)){
//         output += i
//     }
// }
// console.log(output)


// //23
// let str = "1g1"
// console.log(str.match(/\D/gi) ? "no" : "yes")

//24
// Write a program to find the largest word in a string.

// let str = "i am groot hello world"
// let max = -Infinity
// let maxChar

// let arr = str.split(" ")

// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i].length >= max){
//         max = arr[i].length
//         maxChar = arr[i]
//     }
// }
// console.log(maxChar)

//25
// let str = "hello world, how are you world?"
// let val = "o"
// console.log(str.replaceAll(val,""))

//26
// Write a program to capitalize the first letter of each word in a sentence.

// let str = "hello groot, how are you groot?"
// let arr = str.split(" ").map((i)=>{
// return i[0].toUpperCase() + i.slice(1)
// }).join(" ")
// console.log(arr)
