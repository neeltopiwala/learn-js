
// there are 3 way to write long numbers
// let billion = 1000000000;
// let billion = 1_000_000_000;
// let billion = 1e9;  
// console.log(billion)

// let minuesValue = 0.000001
// let minuesValue = 1e-6
// console.log(minuesValue)

// console.log(0xff)
// console.log(0xFaa)//hex prefix
// console.log(0b1111)//binary prefix
// console.log(0o12)//octal prefix


// let num = 255;

// console.log( num.toString(16) );  // ff
// console.log( num.toString(8) ); 
// console.log( num.toString(2) ); 

// console.log( isNaN(NaN) ); // true
// console.log( isNaN("str") ); // true
// console.log( isFinite(Infinity) );  
// console.log( isFinite("15") ); // true
// console.log( isFinite("str") ); 
// console.log( isFinite(NaN) ); 

// console.log( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
// console.log( isNaN("str") ); // it is less strict because it convert type

// toFixed method do both round nearest number . value also it return string 
// console.log(20.2156.toFixed(3))

// console.log(Number("0.30"))

// console.log(Infinity === Infinity)
// console.log(NaN === NaN)
// // console.log([...Infinity])
// console.log(parseInt('100px'))
// console.log(Number("100px"))
// console.log(Number("100"))

// console.log(parseFloat('12.5em'))
// console.log(parseInt('12.5em'))

// console.log(Math.random()*10)



// let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// // two lines using a normal newline and backticks
// let str2 = `Hello
// World`;
// console.log(str1)
// console.log(str2)
// console.log(str1 == str2); 

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// console.log( extractCurrencyValue('$120') === 120 );



// console.log("apple".localeCompare("ball"))

// console.log("apple".localeCompare("Apple","en", { caseFirst: 'lower' }))
// console.log("apple".localeCompare("Apple","en", { caseFirst: 'upper' }))
// // x = {str: 'hello'}
// // y = {str: 'hello'}
// // console.log(y.str === x.str)
// // here Ö = O
// console.log( 'Österreich'.localeCompare('zealand',undefined,{ sensitivity: 'base' }) ); // -1
// console.log( 'Österreich'.localeCompare('zealand') ); // -1