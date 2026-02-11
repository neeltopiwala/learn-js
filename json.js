

let obj = {
    name : "neel",
    age : 211,
    address : {
        city : "surat"
    }
}

// console.log(toString(obj))

// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };

// console.log(typeof JSON.stringify(meetup) );


let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john",undefined, "ann"]
};

// meetup.place = room;       // meetup references room
// room.occupiedBy = meetup; 

console.log(JSON.stringify(meetup))


// things that allow in JSON
// 1. circular reference
// 2. undefined values
// 3. functions
// 4. symbol type of data keys
// // 5. it always convert string value to '' to "".

// function factorial(n){
//   if(n === 1){
//     return 1
//   }else{
//     return n * factorial(n-1)
//   }

// }

// console.log(factorial(5))