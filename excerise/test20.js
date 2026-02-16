// 1
// Write a function that takes a string and returns a new string with all the words reversed using the spread operator.
// let str = "hello"
// let newstr = [...str].reverse().join("")
// console.log(newstr)

//2
// 2. Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.

// function func(a,...rest){
//     return rest
// }
// console.log(func(1,223,4,3,55))

//3
// Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array

// let arr = [1, [2, [3, 4], 5], [8, 9, [7]]];

// function flattenArray(arr) {
//   let result = [];
//   for (let i of arr) {
//     if (!Array.isArray(i)) {
//       result = [...result, i];
//     } else {
//       result = [...result, ...flattenArray(i)];
//     }
//   }
//   return result;
// }
// console.log(flattenArray(arr));

//4
// Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining)

// function checkProperty(obj, Property){
//     return obj?.[Property] ?? null
// }
// let user = {
//     name : "neel",
//     age : 22,
//     city : "surat"
// }
// console.log(checkProperty(user,"address"))

//5
// Write a function which takes in an array and create two separate arrays for odd numbers and even numbers and finally merge them in the order that all odd numbers will move to the left of the array and all even numbers to right of the array.
// function mergeArr(arr){
//     let even = [];
//     let odd = [];
//     for(let i=0;i<=arr.length-1;i++){
//         if(arr[i]%2 === 0){
//             even.push(arr[i])
//         }
//         else{
//              odd.push(arr[i])
//         }
//     }
//     return [...odd,...even]
// }
// console.log(mergeArr([12,3,5,6,8,99,100,1,2,4]))

//6
// Create an array of numbers. Now change the position of each element with their next element.
// For example : [1,2,3,4,5,6,7]
// Output : [2,1,4,3,6,5,7]
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let newArr = [];
// for (let i = 0; i < arr.length; i = i + 2) {
//   if (i === arr.length - 1) {
//     newArr.push(arr[i]);
//   } else {
//     newArr.push(arr[i + 1]);
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);
// shiftElements([1, 2, 3, 4, 5, 6, 7]) 


// //7
// What is your age  : 12
// What is your mobile : 9581894461
// What is your address : Jaipur

// {
//     age12 : 12
//     9581894461 : 'Mobile',
//     Jaipur12Address : 'Jaipur'
// }

// let age = prompt("What is your age")
// let mobile = prompt("What is your mobile")
// let address = prompt("What is your address")

// let obj = {}
// obj[`age${age}`]=age
// obj[mobile]="mobile"
// obj[`${address}${age}Address`]="mobile"


// console.log(obj)

//8
// let obj = {
//   sum(arr) {
//     return arr.reduce((acc, cur) => acc + cur, 0);
//   },
// };

// const arr = [1, 2, 3, 4, 5];
// console.log(obj.sum(arr));

// 9.
// let number =12;
// console.log(number > 80 ? 100 : 200) 

//10
// 10. Create an array of 10 numbers. Now create a new array of 0 and 1 using Array destructring based on if number is odd then 1 else 0
// ```
// Array : [1,2,3,4,5,6,7,8,9]
// Output: [1,0,1,0,1,0,1,0,1]

// let a = [1,2,3,4,5,6,7,8,9]

 
// let [n1,n2,n3,n4,n5,n6,n7,n8,n9] = a

// console.log(n1,n2,n3,n4,n5,n6,n7,n8,n9)

//11
// // 11. Given an array of price, use map function to return a new array where each price is converted to new price including tax, which is the price with a 10% tax added.
// let arr = [10, 20, 30, 40]
// let newarr = arr.map((i)=>{
//     return i + (i * (10/100))
// })
// console.log(newarr)

//12
// Given an array of strings, use reduce to return the total number of characters in all the strings.

// let arr = ["hello","hi","goodmorning","addnewdetails"]

// let alllengths = arr.reduce((acc,i)=>{
//     acc.push(i.length)
//     return acc
// },[])

// console.log(alllengths)

//13
//  Given an array of strings, use map and reduce to return the total number of characters in all the strings with a length less than 5. 

// const words =  ["hello","hi","goodmorning","addnewdetails"];

// const totalChars = words
//   .map(word => word.length < 5 ? word.length : 0) 
//   .reduce((acc, curr) => acc + curr, 0);          

// console.log(totalChars); 

//14
//  Given an array of numbers, use map, filter, and reduce to return the sum of all the odd numbers multiplied by 3

// let arr = [2,3,4,5,6,7,8,9,10,12,13,14]

// let val = arr.filter(a=>a%3===0&&a%2===1).reduce((acc,i)=>{
//     return acc += i
// })

// console.log(val)

//15
//Given a string, reverse the order of the words in the string. For example, "the quick brown fox" becomes "fox brown quick the".

// let arr = "the quick brown fox"
// console.log(arr.split(" ").reverse().join(" "))


