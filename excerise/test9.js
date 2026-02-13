//1
// const str = "My name is learn javascript";
// console.log(str.split(" ").length)

// 2
// let isPalindrome = false;
// let str = "ab";
// let i = 0;
// let j = str.length - 1;

// while (j >= i) {
//   if (str[i] === str[j]) {
//     isPalindrome = true;
//     i++;
//     j--;
//   } else {
//     isPalindrome = false;
//     break;
//   }
// }
// if (isPalindrome) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

//3
// let str = "9581444444"
// console.log(str.slice(0,5)+"*****")
// console.log("*****"+str.slice(5,str.length))
// console.log(str.slice(0,3)+"**"+str.slice(6,9)+"**")

//4
// let str = "H e l l o"
// let arr = str.split("")
// let i = 0;
// let j = str.length - 1;
// while (j >= i) {
//  [arr[i],arr[j]] = [arr[j],arr[i]]
//  i++
//  j--
// }
// str = arr.join("")


// console.log( str.split(""))

// str = str.split("").reverse().join("")
// console.log(str)

// 5
// let str = "hello"
// console.log(str[0].toUpperCase()+str.slice(1))

// 6
// let str = "leArNjavaScript";
// let arr = str.split("");

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i].toLowerCase()) {
//     arr[i] = arr[i].toUpperCase();
//   } else {
//     arr[i] = arr[i].toLowerCase();
//   }
// }
// console.log(arr.join(""))

//7
// let str = "Hello World"
// let arr = str.split(" ").map((items,index)=>{
//     return index===0 ? items[0].toLowerCase()+items.slice(1) : items[0].toUpperCase()+items.slice(1)
// }).join("")
// console.log(arr)

//8
// let str = " Hell o Wo rld";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     count++;
//   }
// }
// console.log(count);

//9
// let temp = "";
// let count = 1;
// for (let i = 10; i >= 1; i--) {
//   temp += String(count).repeat(i);
//   count++;
//   temp += "\n";
//   if (count === 10) {
//     count = 0;
//   }
// }
// console.log(temp);


//10
// let val = prompt("enter your str")
// // Hello learn javascript

// let input = "rn"
// let arr = val.split(" ")


// for(let i=0;i<arr.length;i++){
//     if(arr[i].includes(input)){
//         console.log(arr[i+1])
//         break;
//     }
// }


//14
// let val = prompt("enter your sentence")
// let str = prompt("enter your search")
// console.log(val.includes(str))
      

//15
// let str = "We%^%$Cod!@#e"
// let arr = str.match(/[\w\d$_]/gi)
// console.log(arr ? arr.join("") : " ")
// let vals = ["%","^","@","#","!"]
// str = str.split("").filter((i)=>{
//     return !vals.includes(i)
// }).join("")

// console.log(str)

// 11
// *substring
// it method that return substring from string 
// syntax string.substring(start,end)

// it only accept positive number in both arguments

// slice
// it same as the substring method but it also accept negetive value as argument 

// let str = "hello"

// console.log(str.slice(1,-1))

//substr 
//it is also accept arguments but here is syntax.
// string.substr(start,length)

// 12
// regex in js is one kind of sequence of character that make kind of pattern.
// it is use for text searching.
// it is use for text validation.
// it is use for text verification.
// it is use for text replacing.

// console.log("str")

// 13
// match : Returns an Array of results
// search : Returns the index of the first match

