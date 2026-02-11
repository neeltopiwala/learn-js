// 1
// function removeNegativeValue(val){
//     return val > 0 ? val : 0
// }

// let frenchfrie = prompt("How many french fries (60rs per piece) do you want to order ?")*60
// let burgers = prompt("How many burgers (50rs per piece) do you want to order ?")*50
// let chowmin = prompt("How many plates of chowmin (100rs per plate) do you want to order?")*100
// let Manchurian = prompt("How many plates of Manchurian (80rs per plate) do you want to order?")*80
// let Cokes = prompt("How many Cokes (50 per piece) do you want to order ?")*50

// frenchfrie =  removeNegativeValue(frenchfrie)
// burgers = removeNegativeValue(burgers)
// chowmin = removeNegativeValue(chowmin)
// Manchurian = removeNegativeValue(Manchurian)
// Cokes = removeNegativeValue(Cokes)

// let total = frenchfrie + burgers + chowmin + Manchurian + Cokes
// console.log(total)
// && (i + 1) % 3 !== 0
// 2
let temp = "";
for (let i = 7; i >= 1; i--) {
     if ((i + 1) % 3 === 0) continue; 
  for (let j = 1; j <= 7; j++) {
    if (i >= j ) {
      if ((j + 2) % 3 === 0) {
        temp += "$" ;
      } else {
        temp += "#";
      }
    }
  }
  temp += "\n";
}
console.log(temp);

// $##$##$
// $##$##
// $##$
// $##
// $

//3

//4
// Using a switch case to do the below exercise:

// If number is odd then print "Odd"
// If number is even then print "Even"
// If number is 100 then print "100"
// Else print "10000"

// let n = 100;

// switch (true) {
//   case n===100:
//     console.log(100);
//     break;
//   case n % 2 === 0:
//     console.log("even");
//     break;
//   case n % 2 !== 0:
//     console.log("odd");
//     break;
//   default:
//     console.log("10000");
// }

//5

// let ageyear = prompt("enter your birth years");
// if (new Date().getFullYear() - ageyear > 18 && confirm("Do you have valid license number?")) {
//     let license = prompt("enter your licence number");
//     alert(`User with license number ${license} is ready to drive.`);
// } else {
//   if (confirm("Do you have gaurdians?")) {
//     let name = prompt("enter your gaurdians name");
//     alert(`You are ready to drive with your ${name}`);
//   } else {
//     alert("Sorry visit again please.");
//   }
// }

// //6
// let num1 = prompt("enter first number")
// let num2 = prompt("enter second number")

// let sum = Math.abs(num1-num2)

// if(sum > 19){
//     alert(sum * 3)
// }else{
//     alert(sum * 2)
// }

