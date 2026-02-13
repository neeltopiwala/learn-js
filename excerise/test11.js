
//2
// Write a javaScript function to insert a string within a string at a particular position. For example:
// We are learning exercises.

//now insert the word JavaScript at 14 position so output will be :

// We are learning JavaScript exercises.


// let input = "We are learning exercises.";
// let index = 15;
// let word = "javascript";
// console.log(input.slice(0, index) + word + input.slice(index));

//3

// let str = "My name is allen academy and my friend name is Arun Kumar."

// //find count of 'is' in this word is 2.
// let arr = str.split(" ")
// let find = "is"
// let count = 0
// for(let i=0;i<arr.length;i++){
//     if(find===arr[i]){
//         count++
//     }
// }

// console.log(count)


//4

// let name = prompt("What is your name?")
// let mobile = prompt("What is your mobile number?")
// let account_number = prompt("What is your account number")
// let atm_card_number = prompt("What is your atm card number")
// let aadhar = prompt("What is your aadhar number?")


// console.log(name)
// console.log(mobile.slice(0,mobile.length-3)+"*".repeat(3))
// let n = Math.floor((account_number.length-5)/2)
// console.log(account_number.slice(0,n)+"*".repeat(5)+account_number.slice(n+5))
// console.log(atm_card_number.slice(0,atm_card_number.length-8)+"*".repeat(8))
// console.log("*".repeat(4)+aadhar.slice(4,8)+"*".repeat(4))


//5
// let temp = ""
// for(let i=1;i<=6;i++){
//     temp += " ".repeat(6-i) 
//     temp += "*".repeat((i*2)-1) + "\n"
// }
// console.log(temp)


//6
// let name = prompt("What is your name?")
// let mobile = prompt("What is your mobile number?")
// let year = prompt("What is your birth year?")
// let address = prompt("What is your address ?")
// let countrycode = prompt("What is your country code?")

// console.log(`My name is ${name}. I was born in ${year} and my current age is ${new Date().getFullYear() - year} years. My address is ${address} and my mobile number is ${countrycode+mobile}`)

//7
// let str = "Allen Academy"
// let val = str.split(" ")
// console.log(val[0] + " hello " + "world " + val[1])

//8
// let str = "Allen Academy"

// let guessingWord = prompt("What is the character you are guessing?")
// let index = prompt("What is the index?")

// // What is the character you are guessing? A
// // What is the index? 3

// if(guessingWord===str.charAt(index)){
//     console.log("Congrulations")
// }
// else{
//     console.log("sorry")
// }

//9
// ```
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

// let temp = ""
// for(let i=6;i>=1;i--){
//      temp += " ".repeat(6-i) 
//     temp += "*".repeat(i*2-1) + "\n"
// }
// console.log(temp)

//10
// 1 224 3339 444416 5555525

// let str = "";
// for (let i = 1; i <= 5; i++) {
//   let sum = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i !== 1) {
//       sum = sum + i;
//     } else {
//       sum = "";
//     }
//   }
//   str = str + i.toString().repeat(i) + sum + " ";
// }
// console.log(str);
