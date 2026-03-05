// Question 1 : How can you convert a string to a number in JavaScript? write all the ways.
// console.log(Number("11"))
// console.log(+"11")
// console.log(parseFloat("123"))
// console.log(parseInt("123"))

//2
// Question 2 : How do you round a number to a certain number of decimal places in JavaScript?

// console.log(20.3373.toFixed(2))

//3

// let i = 10
// let j = 20

// console.log(Math.floor(Math.random() * (20-10)+10))

//4
// Question 4 : How do you convert a number to a binary, octal, or hexadecimal format in JavaScript?
// console.log(0x11)
// console.log(0b11)
// console.log(0O11)
// console.log(11)

//5

// let date1 =  new Date(2020,0,0,0,0,0,0)
// let date2 =  new Date(2021,0,0,0,0,0,0)

// console.log(date1)
// console.log(date2)
// date1.setDate(date1.getDate() + 15)
// date1.setDate(date1.getDate() - 15)

// console.log(date1)

//6
// let date1 =  new Date(2026,0,0,0,0,0,0)
// let date2 =  new Date(2021,0,0,0,0,0,0)
// let date3 =  new Date(2021,0,0,0,0,0,0)

// // console.log(date1.getTime())
// // console.log(date2.getTime())
// // console.log(date1.getTime()-date2.getTime())
// let val = date1.getTime()-date2.getTime()

// if(val > 0){
//     console.log("date1 is large than date2")
// }
// else if(val < 0){
//     console.log("date1 is less than date2")
// }
// else{
//     console.log("date1 and date2 is equal")
// }

//7
// let date1 =  new Date(2026,3,2,0,0,0,0)
// console.log(date1.toLocaleDateString())

//8
// let start =  new Date(2026,2,14,0,0,0,0) // days start from 1 to n  and  other things start from 0 to n
// let end =  new Date(2026,3,7,0,0,0,0)
// console.log(date1.toLocaleDateString())

// console.log(date1.getDay())//it day from 0 to 6

// let timeDifference = end - start;
// console.log(timeDifference)
// let daysDifference = timeDifference / (1000 * 3600 * 24);
// console.log(daysDifference);

//9
// let start = new Date(2023,2,14,0,0,0,0) // days start from 1 to n  and  other things start from 0 to n
// console.log(start.getYear() % 4 === 0);

//10
//  How do you convert a string to a date in JavaScript? Write all ways?

// let str = "1/1/2003"
// console.log(new Date(str))

// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
// console.log(date);

// let mydate = new Date('2014-04-03');
// console.log(mydate.toDateString());

//11
// const str = "2025-1-2";
// const part = str.split("-");
// const date = new Date(part[0], part[1] - 1, part[2]);
// console.log(date);

//12
// let options = {
//   timeZone: "Europe/London",
//   year: "numeric",
//   month: "numeric",
//   day: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
// };
// let formatter = new Intl.DateTimeFormat([], options);

// console.log(formatter.format(new Date()));

//13
//Print date and time after every 1 second in the format 'MM/DD/YYYY HH:MM:SS'

// let interval = setInterval(()=>{
//     let date = new Date()
//     let day = date.getDate()
//     let months = date.getMonth()
//     let years = date.getFullYear()
//     let hours = date.getHours()
//     let minute = date.getMinutes()
//     let seconds = date.getSeconds()
//     console.log(`${months+1}/${day}/${years} ${hours}:${minute}:${seconds+1}`)
// },1000)

// let date = new Date(2004,4,10,22,22,33,11)
// console.log(date.getDate())

//14
// function getDaysInMonth(month, year) {
// return new Date(year, month, 0).getDate();
// }
// console.log(getDaysInMonth(0, 2015));
// console.log(getDaysInMonth(4, 2023));

//15
// function getWeekDay(date) {
//   let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//   return days[date.getDay()];
// }
// let date = new Date(2014, 0, 3);
// console.log( getWeekDay(date) );

//16
// function getMonthName(date) {
//   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   const monthIndex = date.getMonth();
//   return months[monthIndex];
// }
// const date = new Date("2023-04-12");
// const monthName = getMonthName(date);

// //17
// function isWeekend(date) {
//   const day = date.getDay();
//   return day === 0 || day === 6;
// }
// const date = new Date("2023-04-16");
// const isWeekendDay = isWeekend(date);

//18
// function findBirthday(date){
//     console.log(new Date().getFullYear() - new Date(date).getFullYear())
// }

// console.log(findBirthday("2004/08/23"))

//19
// Write a Javascript function to using setInterval to show alert box when date is your birth date.

// function showBirthday(date){
//     console.log(new Date().getFullYear() - new Date(date).getFullYear())
// }

// console.log(findBirthday("2004/08/23"))

//20
// const birthDate = new Date('2004/08/23');
// const formattedDate = birthDate.toLocaleDateString('ar-SA');
// console.log(formattedDate);

//21
// const birthDate = new Date('2004/08/23');
// const formattedDate = birthDate.toLocaleDateString('zh-CN');
// const formattedDate2 = birthDate.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
// console.log(formattedDate);
// console.log(formattedDate2);

//22

// let str = "1111"
// console.log(parseInt(str,2))

//23
// let decimal = 15
// console.log(decimal.toString(2))
// console.log(decimal.toString(8))
// console.log(decimal.toString(16))

// Question 24,25
// let arr = [12,22,1,100,40]
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))

//26
// let value = Infinity

// console.log(Number.isInteger(value))
// console.log(Number.isFinite(value))
// console.log(Number.EPSILON)
// console.log(Number.NEGATIVE_INFINITY)
// if(typeof value === "number"){
//     console.log("yes its integer")
// }
// else{
//     console.log("no its not integer")
// }

//27
// let value = -20
// console.log(-value)

//28
// // Hindi Locale (India)
// const hindiFormatter = new Intl.NumberFormat('hi-IN', {
//   style: 'unit',
//   unit: 'liter',
// });
// console.log(hindiFormatter.format(value)); // Output: 50 लीटर

// // Chinese Locale (China)
// const chineseFormatter = new Intl.NumberFormat('zh-CN', {
//   style: 'unit',
//   unit: 'liter',
// });
// console.log(chineseFormatter.format(value)); // Output: 50升

//29
// Question 29 : Create a function to convert any number to given currency.
// let currency = 143450
// console.log(currency.toLocaleString("en-US", {
//     style: 'currency',
//     currency: 'USD',
// }))
// console.log(currency.toLocaleString("hi-IN",{
//     style: 'currency',
//     currency: 'INR',
// }))
// console.log(currency.toLocaleString("en-DE"))

//30
// let arr = [1,2,4,5]
// let n = 5
// let sum = 0
// for(let i=0 ; i<arr.length ;i++){
//     sum += arr[i]
// }
// console.log((n*(n+1)/2) - sum )




// // implemention of indexOf

// let sentense = "To, or not to be";
// let val = "be";
// let i = 0;
// let j = 0;
// while (j < val.length || i < sentense.length) {
//   if (sentense[i] === val[j]) {
//     if (j === val.length - 1) {
//       console.log(i + 1 - val.length);
//       break;
//     }
//     i++;
//     j++;
//   } else {
//     i++;
//     j = 0;
//   }
// }
