//1
// let fruits = ["apple", "banana", "orange"]
// console.log(fruits.includes("orange"))

//2
// let arr = [20,1,22,4,10,3]

// function sum(a){
//     let sum = 0
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]%2===0){
//             sum += arr[i]
//         }
//     }
// return sum
// }

// console.log(sum(arr))

//3
// 3. Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.
// function uniqueFromBoth(arr1, arr2) {
//   return [...new Set([...arr1, ...arr2])];
// }
// console.log(uniqueFromBoth([1,2,3,1,1,2],[8,9,10,3,10,8,9]))

//4
// let arr = ["hello","worldddd","hi","bye"]
// let max = -Infinity
// let maxvalue
// for(let i=0;i<arr.length;i++){
//     if(arr[i].length>=max){
//         max = arr[i].length
//         maxvalue = arr[i]
//     }
// }
// console.log(maxvalue)

//5
// let arr = [1,5,3,4]
// let largest = Math.max(...arr)
// console.log(largest)

//6
// let arr = [1,2,3,4,5,6]

// let even = arr.filter((val)=>{
//     return val % 2 === 0
// })

// console.log(even)

//7
// let arr = ["hello","characeter","hi","helloworld","no"]

// let even = arr.filter((val)=>{
//     return val.length > 5
// })

// console.log(even)

//8
// Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).
// let arr = [1, 2, 3, 4, 5, 5]
// let arr2 = [4, 5, 6, 7, 8]
// let output = []
// let set1 = new Set(arr)
// let set2 = new Set(arr2)
// // for(let i=0;i<arr.length;i++){
// //     // if(arr2.includes(arr[i])){
// //     //     output.push(arr[i])
// //     // }
// // }
// console.log(output)

//9
// let arr = [3,4,5,6]

// let squared = arr.map((i)=>{
//     return i ** 2
// })

// console.log(squared)

//10
// let arr = [3,4,5,6]

// let sum = arr.reduce((acc,i)=>{
//    acc += i
//    return acc
// },0)

// console.log(sum/arr.length)

//11
// Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function

// let arr = [5,8,2,10,1,3]

// let filter = arr.filter((i)=>{
//     return i > 5
// })
// console.log(filter)

//12

// let arr = [5,8,2,10,1,3]

// let filter = arr.map((i)=>{
//     return i + 1
// })
// console.log(filter)

//13
// Write a function that takes an array of numbers and returns a new array that contains only the unique numbers using reduce.

// let arr = [1,5,8,2,5,2,1]
// let unique = arr.reduce((acc,i,index)=>{
//     if(index === arr.indexOf(i)){
//         acc.push(`<li>${i}</li>`)
//     }
//     return acc
// },[])

// console.log(unique)

//14
// let arr = ["hello", "characeter", "hi", "helloworld", "no"];
// let lengths = arr.reduce((acc, i) => (acc = [...acc, i.length]), []);
// console.log(lengths);

//15
// let string = ["hello", "characeter", "hi", "helloworld", "no","apple", "banana", "cherry", "date"];
 
// string.sort((a,b)=>a.length - b.length)

// console.log(string)

//16
// Write a function that takes an array of numbers and returns the second highest number.

// let arr = [40, 20, 1, 100, 3, 100, 9];
// let firstMax = arr[0];
// let secondMax = -1;

// for (let i = 1; i <= arr.length - 1; i++) {
//   if (firstMax < arr[i]) {
//     secondMax = firstMax;
//     firstMax = arr[i];
//   } else if (firstMax > arr[i] && secondMax < arr[i]) {
//     secondMax = arr[i];
//   }
// }

// console.log(firstMax, secondMax);


//18
// Write a function that takes an array of strings and returns a new array with only the strings that contain the letter "a".
// let strings = ["hello", "characeter", "hi", "helloworld", "no","apple", "banana", "cherry", "date"];
// let acontains = strings.filter(i => i.includes("a"))
// console.log(acontains)

//19
// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// let arr = [40, 20, 1, 100, 3, 100, 9];

// let sort = arr.toSorted((a,b)=>{
//     return a-b
// })

// console.log(sort)
// console.log(arr)




//20
// let arr = ['hello', 'world'];

// let val = arr.reduce((acc,i)=>{
//     return acc = [...acc , ...i]
// },[])

// console.log(val)
// Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']



