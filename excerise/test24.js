// 1. Write a program to reverse a string.
// let str = "hello"
// console.log(str.split("").reverse().join(""))

// 2. Check if a given string is a palindrome.
// let str = "mada"
// let i = 0
// let j = str.length-1
// let flag = false
// while(i<j){
//     if(str[i]===str[j]){
//         i++
//         j--
//         flag = true
//     }
//     else{
//         flag = false
//         break;
//     }
// }
// console.log(flag ? "palindrom" : "not palindrom")

//3

// let str = "aei"
// let count = 0
// for(let i=0 ; i<str.length ;i++){
//     if(/([AEIOU])/i.test(str[i])){
//         count++
//     }
// }

// console.log(count)
// const count = (str.match(/[aeiou]/gi) || []).length;

//6
// let str = "hello"
// let count = 0
// for(let i of str){
//     count++
// }

// console.log(count)

//7
// 7. Remove all spaces from a string.

// let str = "hello world bye world"
// console.log(str.replaceAll(" ",""))

//8
// let str1 = "hello"
// let str2 = "world"

// console.log(str1.concat(str2))

//9
// let str = "hheeelowww";
// let arr = str.split("");
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
//     obj[arr[i]] = 0;
//   }
//   obj[arr[i]]++;
// }

// for(let i in obj){
//     if(obj[i]===1){
//         console.log(i)
//         break;
//     }
// }

//10

// let str = "apple apple";

// function replaceAllChar(str, findChar, replaceChar) {
//   let j = 0;
//   let output = "";
//   let temp = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === findChar[j]) {
//       if (j === findChar.length - 1) {
//         temp = "";
//         output += replaceChar;
//       } else {
//         temp += str[i];
//         j++;
//       }
//     } else {
//       output += temp + str[i];
//       j = 0;
//       temp = "";
//     }
//   }
//   return output;
// }

//11

//12
// let str = "aabcde"
// console.log(str.startsWith("aa"))

// //13
// let str = "aabcde"
// console.log(str.endsWith("aab"))

//14
// let words = "hello world good morning"

// console.log(words.split(" ").length)

//15
// let str = "abbcccefhhh"
// let arr = str.split("")
// console.log(arr.filter((i,index)=>{
//     return index === arr.indexOf(i)
// }).join(""))

//16
// let words = "hello world good morning"
// console.log(words.split(" ").map((i)=>{
//     return i.charAt(0).toUpperCase()+i.slice(1)
// }).join(" "))

//17
// let words = "Hello";
// console.log(
//   words
//     .split("")
//     .map((i) => {
//       if (i.toUpperCase() === i) {
//         return i.toLowerCase();
//       } else {
//         return i.toUpperCase();
//       }
//     })
//     .join(""),
// );

//18
// 18. Find the most frequent character in a string.
// function getMaxChar(str) {
//     const charMap = {};
//     let max = 0;
//     let maxChar = '';

//     for (let char of str) {
//         charMap[char] = (charMap[char] || 0) + 1;
//         if (charMap[char] > max) {
//             max = charMap[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }

// console.log(getMaxChar("banana"));

//19
// 19. Implement a function to truncate a string if it's longer than a certain length, adding "..." at the end.

// function truncate(str, n){
//     return str.slice(0,n)+"..."
// }

// console.log(truncate("hello world bye bye",7))

//1
// let str1 = "bat";
// let str2 = "tab";

// console.log(
//   str1
//     .split("")
//     .sort((a, b) => {
//       return a.localeCompare(b);
//     })
//     .join("") ===
//     str2
//       .split("")
//       .sort((a, b) => {
//         return a.localeCompare(b);
//       })
//       .join(""),
// );

//2
// let s = "123456";
// let res = !isNaN(Number(s));
// console.log(res);

//3
// let paragraph = "The quick brown fox jumps brown over brown the lazy dog"
// let find = "brown"
// let freq = paragraph.split(" ").reduce((acc,i)=>{
//     let lower = i.toLowerCase()
//      acc[lower] = (acc[lower] || 0) + 1
//      return acc
// },{})
// console.log(freq[find.toLowerCase()])

//4  Reverse the order of words in a sentence.

// let paragraph = "The quick brown fox jumps brown over brown the lazy dog"
// console.log(paragraph.split(" ").reverse().join(" "))

//5 Capitalize the first letter of each word in a sentence.
// let paragraph = "The quick brown fox jumps brown over brown the lazy dog"
// let output = paragraph.split(" ").map((i)=>{
//     return i.at(0).toUpperCase()+i.slice(1)
// }).join(" ")

// console.log(output)

//6
// let s = "aaa"
// let obj = {}

// let i = 0
// let j = 0
// let max = 0
// let maxval
// // obj[s[j]]
// while(j<s.length){
//     if(!Object.hasOwn(obj,s[j])){
//         // console.log("in if",obj)
//         obj[s[j]] = j
//         console.log("in if",obj)

//         j++
//     }
//     else{
//         console.log("in else",maxval)

//         if(max < j-i){
//             max = j-i
//             maxval = s.slice(i,j)
//             console.log("in else if",maxval)
//         }
//         i = obj[s[j]]+1
//         obj = {}
//         obj[s[j]] = j
//         j++
//     }
// }

// console.log(max)
// console.log(maxval)

//7. Rotate a string to the left by a given number of positions.

// let str = "qwertyu"
// let d = 20
// let shift = d % str.length;
// console.log(str.slice(shift)+str.slice(0,shift))

//9
// let str = "aaaabbbbbbbbbbbbbbbcbbbbbbbbbccccc";
// let count = 1;
// let output = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i + 1]) {
//     count++;
//   } else {
//     output += `${str[i]}`;
//     if (count > 1) {
//       output += `${count}`;
//       count = 1;
//     }
//   }
// }
// console.log(output);

//13
// let str = "Reverse this sentence"
// let output = str.split("").reverse().join("")
// console.log(output)

//16
// let arr = ["hello","hella","he"]
// function longestCommonPrefix(arr){
//     console.log(arr.sort())
//     let first = arr[0];
//     let last = arr[arr.length - 1];
//     let minLength = Math.min(first.length, last.length);
//     let i = 0;
//     while (i < minLength && first[i] === last[i]) {
//         i++;
//     }
//     return first.substring(0, i);
// }

// console.log(longestCommonPrefix(arr) );

//18
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
// console.log(str.length)

// const encodedData = window.btoa("Hello, world"); // encode a string
// const decodedData = window.atob(encodedData); // decode the string

//19
// let dateString = "12/7/2000";
// const parts = dateString.split("/");
// const month = parseInt(parts[0]);
// const day = parseInt(parts[1]);
// const year = parseInt(parts[2]);
// const d = new Date(year, month - 1, day);
// console.log(d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day);

// //1
// function manualIndexOf(source, target) {
//     if (target.length === 0) return 0;
//     for (let i = 0; i <= source.length - target.length; i++) {
//         let match = true;
//         for (let j = 0; j < target.length; j++) {
//             if (source[i + j] !== target[j]) {
//                 match = false;
//                 break;
//             }
//         }
//         if (match) return i;
//     }
//     return -1;
// }
// console.log(manualIndexOf("hello world", "world"));

//4
// let str = ""
// let arr = str.split(" ")
// let i = 0
// let j = arr.length-1

// while(i<j){
//     if(arr[i]===" ") i++
//     if(arr[j]===" ") j--
//     [arr[i],arr[j]]=[arr[j],arr[i]]
//     i++
//     j--
// }
// console.log(arr.join(" "))

//4
// let str = "  keep   the   space  "
// let arr = str.split(" ")
// let i = 0
// let j = arr.length-1

// while(i<j){
//    if (arr[i] === "") {
//         i++;
//         continue;
//     }
//     if (arr[j] === "") {
//         j--;
//         continue;
//     }
//     [arr[i],arr[j]]=[arr[j],arr[i]]
//     i++
//     j--
// }
// console.log(arr.join(" "))

//6

// let str = "abcde";
// let arr = new Set();
// arr.add("");

// for (let i = 0; i <= str.length; i++) {
//   for (let j = i + 1; j <= str.length; j++) {
//     arr.add(str.slice(i, j));
//   }
// }

// console.log(arr.size);

//7
// //Implement the split function without using the built-in method.
// function split2(str, separator) {
//   let val = "";
//   let arr = [];

//   for (let i = 0; i <= str.length; i++) {
//     // Handle the empty string separator case (split by character)
//     if (separator === "") {
//       if (i < str.length) {
//         arr.push(str[i]);
//       }
//     } else {
//       // Logic for standard delimiters
//       if (i === str.length || str[i] === separator) {
//         arr.push(val);
//         val = "";
//       } else {
//         val += str[i];
//       }
//     }
//   }
//   return arr;
// }

//10

//11
//
// "The quick brown fox" becomes "ehT kciuq nworb xof"
// let str = "The quick brown fox".split(" ").map((i)=>{
//     return i.split("").reverse().join("")
// }).join(" ")

// console.log(str)

// let input = [1,4,4,[1,1,[1,2,1,1]]]
// let n = 1;
// // output // [[0,1],[1,2],[2,3]]

// // let a = [1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]]
// // let n =  2
// //[[0,0],[1,1],[2,1],[3,1],[4,1]]

// function findval(arr, i) {
//   let output = [];

//   function nested(a, level = 0) {
//     let count = 0;
//     for (let j = 0; j < a.length; j++) {
//       if (!Array.isArray(a[j])) {
//         if (a[j] === i) {
//           count++;
//         }
//       } else {
//         let val = nested(a[j], ++level)

//       }
//     }
//      output = [...output, [level, count]];
//     // return [level, count];
//   }
//   console.log(output)
// //   console.log(nested(arr));
// }

// console.log(findval(input, n));
