console.log("my" + "string")
console.log("1"+2)
console.log(1+"2")
console.log("1"+"0"*"5"+"5")

//unary plus oprater do same as Number() method 
console.log(+"1")
console.log(+"-1")
console.log(+true)
console.log(+false)
console.log(+null)
console.log(+NaN)

//unary minus oprater do same as Number() method but change + yo - and - to +
console.log(-"-1")
console.log("hello",-null)
console.log(-false)
console.log(-true)
console.log(-NaN)

console.log(-0 == 0)
console.log(-0 === 0)

console.log(Boolean(-0))
console.log(Boolean(0))

console.log(10/2*3)//15
console.log(10/2+3*3)//14
console.log(10+6/3*3)//16


// modification in place

let n = 2
// n += 1 
// n **= 2
// console.log(n)
n *= 3 + 5; // in this right part evaluated first like this n *= 8 to n = 2 * 8 = 16 
console.log(n)


let count = 0
let a = ++count // it increase first and then return value
a = count++ // it  return first then increment

a = 2 * ++count
console.log("a",a)

console.log("" + 1 + 0)
console.log("" - 1 + 0)
console.log(true + false)
console.log(4 + 5 + "px")
console.log("4px" - 2)
console.log("  -9  " + 5)
console.log("  -9  " - 5)
console.log(" \t \n" - 2) // when - do Number() conversion it will remove all space so it will do "" to 0 , so 0 - 2 = -2

