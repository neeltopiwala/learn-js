// for (;;) {
//   // repeats without limits
//   console.log("hello world")
// //   break;
// }

// for(let i=0 ; i<5 ; i++){
//     // i==2 ? console.log(i) : continue ; it show error because we cant use break and continue with ternary oprater
// }

// we can also give label to loop

// let arr = [1,2,3,4,5,6,7]
// evenNumberLoop : for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         break evenNumberLoop;
//     }
//     console.log(arr[i])
// }

// break , continue accept label of loop

let a = 4;
let num = 5;

switch (true) {
  case "4":
    console.log("hello1");
    break;
//   case 4 :
//     console.log("hello2");
//     break;
  case num == 5:
    console.log("hell3");
    break;
}

// outerloop : for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log("j", j);
//     break outerloop;
//   }
//   console.log("i", i);
// }