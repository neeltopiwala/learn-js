// ### Question 1
// Write a function that takes an object as an input and returns a new object with the same keys and values, but with all the string values capitalized.

// let personObj  = {
//     firstName : "hello",
//     lastName : "doe",
//     age : 19,
//     city : "surat",
//     lastAge : 18,
// }

// for(let i in personObj){
//     if(typeof(personObj[i])==="string"){
//         personObj[i] = personObj[i].toUpperCase()
//     }
// }

// console.log(personObj)
//

//2
// Write a function that takes two objects as inputs and returns a new object that contains only the keys that are present in both objects, along with their corresponding values from the first object.
// let personObj  = {
//     lastName : "doe",
//     age : 19,
//     city : "surat",
//     lastAge : 18,
// }

// let personObj2  = {
//     firstName : "hello",
//     age : 19,
//     city : "surat",
// }

// let obj = {}

// for(let i in personObj){
//     if(personObj2[i]){
//         obj[i] = personObj[i]
//     }
// }

// console.log(obj)

// 3
// let arr = [
//       {
//     firstName: "hello",
//     age: 19,
//     city: "surat",
//     lastName: "doe",
//   },
//   {
//     firstName: "hello",
//     age: 19,
//     city: "surat",
//     lastName: "doe",
//   },
//   {
//     firstName: "neel",
//     age: 20,
//     city: "surat",
//     lastName: "doe",
//   },
//   {
//     firstName: "raj",
//     age: 21,
//     city: "ahemdabad",
//     lastName: "tada",
//   },
//   {
//     firstName: "krunal",
//     age: 22,
//     city: "vadodra",
//     lastName: "kaneria",
//   },
//   {
//     firstName: "neel",
//     age: 19,
//     city: "rajkot",
//     lastName: "topiwala",
//   },
//   {
//     firstName: "john",
//     age: 19,
//     city: "surat",
//     lastName: "snow",
//   },
//   {
//     firstName: "jessi",
//     age: 24,
//     city: "surat",
//     lastName: "doe",
//   },
// ];

// let key = "city"
// let newarr = new Set()
// let unique = arr.reduce((acc,i)=>{
//    if(!newarr.has(i[key])){
//     acc.push(i)
//     newarr.add(i[key])
//    }
//    return acc 
// },[])

// console.log(unique)

//4

// let personObj  = {
//     firstName : "hello",
//     lastName : "doe",
//     age : 19,
//     city : "surat",
//     lastAge : 18,
// }

// console.log(Object.keys(personObj).sort((a, b) => a - b))

//5
// Write a function that takes an object and a string as input and returns a new object with all the keys that start with the specified string. The original object should not be modified.

// let personObj  = {
//     firstName : "hello",
//     lastName : "doe",
//     age : 19,
//     city : "surat",
//     lastAge : 18,
// }
// let obj = {}
// let str = "last"

// for(let i in personObj){
//     if(i.startsWith(str)){
//         obj[i] = personObj[i]
//     }
// }
// console.log(obj)

//1
// Write a function that takes an array of strings as an input and returns a new array where each string has been capitalized (i.e. the first letter of each word is capitalized).
// function capitalizeWords(arr) {
//   return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
// }

// const words = ["apple", "banana", "cherry", "date"];
// const capitalizedWords = capitalizeWords(words);
// console.log(capitalizedWords);
// // Output: ["Apple", "Banana", "Cherry", "Date"]

//2
// let arr = [1, 10, 2, 6, 5]
// let product = 1
// arr.sort((a,b) => a-b)
// console.log(arr)
// let i= arr[0]
// if(i>0){
//     product = arr.at(-1) * arr.at(-2) * arr.at(-3)
// }
// else{
// }

//3
// let arr1 = [1,2,3,3]
// let arr2 = [3,4,2,6]
// let result = []

// for(let i=0;i<=arr1.length;i++){
//     if(arr2.includes(arr1[i])&&!result.includes(arr1[i])){
//         result.push(arr1[i])
//     }
// }
// console.log(result)





//4
// Write a function that takes an array of strings as an input and returns a new array that contains only the strings that are palindromes (i.e. they are the same forwards and backwards).
// let str = ["mapdam","teset","malayleryalam"]

// function isItPalindromes(arr) {
//   const palindromes = [];
//   for (let i = 0; i < arr.length; i++) {
//     const str = arr[i];
//     if (str === str.split('').reverse().join('')) {
//       palindromes.push(str);
//     }
//   }
//   return palindromes;
// }
// console.log(isItPalindromes(str))

//5
// Write a function that takes an array of numbers as an input and returns a new array where each number has been multiplied by 2 if it is even, or by 3 if it is odd.
// let arr = [2,3,4,5,6,7]
// let newarr = arr.map((i)=>{
//     if(i%2===0){
//         return i*2
//     }
//     else{
//         return i*3
//     }
// })

// console.log(newarr)


//1
 
// let set_arr = [new Set([1,2,3,1]), new Set([3,10]), new Set([1,2,1,1,10])]
// let compareSet = set_arr[0]
// let result = new Set()
// for(let i = 1; i<set_arr.length;i++){
//     for(let j of set_arr[i]){
//         if(compareSet.has(j)){
//             result.add(j)
//         }
//     }
//     compareSet = new Set(result)
//     result.clear()
// }
// console.log(compareSet)



//2
//   const oddsets = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     const n = arr[i];
//     if (n % 2 !== 0) {
//       oddsets.add(n);
//     }
//   }
//   return oddsets;

//3

// let set1 = new Set([1,2,4,5]);
// let set2 = new Set([6,2,1,7,8]);
// let result = new Set();
// for(let i of set2){
//     if(!set1.has(i)){
//         result.add(i)
//     }
// }
// console.log(result)

//5

// let set_arr = [new Set([1,2,3,10,7]), new Set([5,3,10]), new Set([1,2,1,4,10])]
// let compareSet = set_arr[0]
// let result = new Set()
// for(let i = 1; i<set_arr.length;i++){
//     for(let j of set_arr[i]){
//         if(compareSet.has(j)){
//             result.add(j)
//         }
//     }
//     compareSet = new Set(result)
//     result.clear()
// }
// console.log(compareSet)

// let allelement = new Set()
// let allUnique = new Set()

// for(let i=0;i<set_arr.length;i++){
//     for(let j of set_arr[i]){
//             allelement.add(j)
//     }
// }
// console.log(allelement)

// for(let i of allelement){
//     if(!compareSet.has(i)){
//         allUnique.add(i)
//     }
// }
// console.log(allUnique)


//1.
// Write a function that takes two Maps as inputs and returns a new Map that contains only the keys that are present in both Maps, with the corresponding values from the first Map.

// let map1 = new Map()
// let map2 = new Map()

// let result = new Map()

// map1.set("name","neel")
// map1.set("city","surat")
// map1.set("state","gujarat")

// map2.set("name","raj")
// map2.set("city","ahemdabad")
// map2.set("age",18)


// for(let i of map1.keys()){
//     if(map2.has(i)){
//         result.set(i,map1.get(i))
//     }
// }

// console.log(result)


//2
// Write a function that takes a Map of numbers as an input and returns a new Map where each key is the square root of the corresponding key in the input Map, and the value is the square of the corresponding value in the input Map.

// let map1 = new Map()
// let map2 = new Map()

// // let result = new Map()

// map1.set(2,"neel")
// map1.set(3,"surat")
// map1.set(4,"gujarat")

// for(let i of map1.keys()){
//     map2.set(i**2,map1.get(i))
// }

// console.log(map2)

//3
// let map1 = new Map()
// let map2 = new Map()
// let result = new Map()

// map1.set("name","neel")
// map1.set("city","surat")
// map1.set("state","gujarat")

// map2.set("name","raj")
// map2.set("city","ahemdabad")
// map2.set("age",18)


// for(let i of map1.keys()){
//     if(map2.has(i)){
//         result.set(i,map2.get(i))
//     }
// }

// console.log(result)

//4
// Write a function that takes a Map of numbers as an input and returns the sum of the values of all of the even keys in the Map.


// let map1 = new Map()

// map1.set(2,10)
// map1.set(3,66)
// map1.set(4,40)
// map1.set(5,40)
// map1.set(6,40)
// let result = 0
// for(let [key,values] of map1){
//     if(key%2===0){
//         result += values
//     }
// }
// console.log(result)

//5
// let map1 = new Map();
// let result = new Map();

// map1.set("id1", "apple");
// map1.set("id2", "banana");

// for (let [key, value] of map1) {
//   for (let i = 0; i < value.length; i++) {
//     if (!result.has(value[i])) {
//       result.set(value[i], 1);
//     } else {
//       result.set(value[i], result.get(value[i]) + 1);
//     }
//   }
// }
// console.log(result);
// Expected Output: Map { 'a' => 4, 'p' => 2, 'l' => 1, 'e' => 1, 'b' => 1, 'n' => 2 }

