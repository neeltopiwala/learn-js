let height = null;
let width = null;

// it same as || short circuit oprater but diffrence is it accept only falsy value as null and undefined.

// console.log(null || 0 || 4)
// console.log(NaN ?? 0 ?? 4)


// let area = (height ?? 100) * (width ?? 50);
// let area = height ?? 100 * width ?? 50;
// console.log(area)


// console.log(1 && 2 ?? 3); //it show error because we can use && oprater with AND && , OR ||.
// console.log((1 && 2) ?? 3); 

console.log(1 || 2 && 3)  // In JavaScript, the && (logical AND) operator has higher precedence than || (logical OR). ans 1
console.log((1 || 2) && 3) // 3





