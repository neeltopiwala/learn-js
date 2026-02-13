//3
// How do you loop through the properties of an object in JavaScript?

// using for...in
// arr.values
// arr.keys
// arr.entries

//5
// const user = {
//   name: 'John Doe',
//   age: 30,
//   city: 'New York'
// };
// console.log(Object.entries(user))

//6
// let personObj  = {
//     firstName : "hello",
//     lastName : "doe",
//     age : 19,
//     city : "surat"
// }

// function giveFullName(obj){
//     return obj.firstName + " " + obj.lastName
// }

// console.log(giveFullName(personObj))

//7
// Create an Object with your personal details. Now print all the keys of the object in ascending order.

// let personObj  = {
//     firstName : "hello",
//     lastName : "doe",
//     age : 19,
//     city : "surat",
//     lastAge : 18,
// }

// console.log(Object.keys(personObj).sort((a,b) => a.localeCompare(b)))

//8
// let personObj  = {
//     firstName : "hello",
//     lastName : "doe",
//     age : 19,
//     city : "surat",
//     lastAge : 18,
// }

// console.log(Object.values(personObj).sort((a,b) => String(b).localeCompare(String(a))))

//9
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

// let recipe  = {
//     title : "mole",
//     Serves : 3,
//     Ingredients : ["cinnamon","cumin","cocoa"]
// }

// console.log(`${recipe.title}`)
// console.log(`Serves : ${recipe.Serves}`)

// for(let i=0;i<recipe.Ingredients.length;i++){
// console.log(`${recipe.Ingredients[i]}`)

// }

//10
//Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.
// let obj = {
//     maxOfThree(n1,n2,n3){
//         return Math.max(n1,n2,n3)
//     }
// }
// console.log(obj.maxOfThree(10,3,5))