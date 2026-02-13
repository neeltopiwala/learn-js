//1
// let str = "Code"
// if(str.at(4)){
// console.log(str.at(4))
// }else{
// console.log("code")
// }

//3
// let digits = "555556"
// let xor = false
// for(let i=0;i<digits.length;i++){
//     // xor ^= digits[i]
//     // console.log(xor)
//     if(digits[i]===digits[i+1] || i === digits.length-1){
//         xor = true
//     }
//     else{
//         xor = false
//         break;
//     }
// }
// if(xor){
// console.log("yes it all same")
// }
// else{
// console.log("no it not all same")
// }

//4
// let word = 12332345;
// let newstr = "";
// while (word > 0) {
//   newstr += word % 10;
//   word = Math.floor(word / 10);
// }
// console.log(Number(newstr));

//5
// Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

// let string = "thequickbrownfoxjumpsoverthelazydog"
// let str = ""
// for(let i=0;i<string.length;i++){
//     if(string.indexOf(string[i])===i){
//         str += string[i]
//     }
// }
// console.log(str)

//6
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

let size = 4;
let newstr = "w3resource";
let pushStr = "";
let arr = [];
for (let i = 0; i <= newstr.length; i++) {
  if (size <= 1) {
    arr.push(newstr)
    break;
  }
  if ((i % size === 0 && pushStr) || i === newstr.length) {
    arr.push(pushStr);
    pushStr = "";
  }
  pushStr += newstr[i];
}
console.log(arr);

// function divideSubString(str,size=0){
//     if(size <= 1){
//         return [str]
//     }
//     else{
//         return str.match(new RegExp(`\\w{1,${size}}`,"g"))
//     }
// }
// console.log(divideSubString(str))
