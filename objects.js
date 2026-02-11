// console.log(String({a:"1"}))
// console.log(Number({a:"1"}))

// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true  // multiword property name must be quoted
// };

// console.log(user["likes birds"])//valid
// console.log(user.likes birds)// no valid

// let users = {
//     name : "hello",
//     name : "world"
// }
// console.log(users.name) // override if key has same name

// console.log(+"  +91   ")

// const object = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// Object.defineProperty(object, "foo", {
//   value: 42,
// });

// console.log(Object.getOwnPropertyNames(object));
// console.log(Object.keys(object));

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     // return this
//   },
//   down() {
//     this.step--;
//     //  return this
//   },
//   showStep: function() { // shows the current step
//     console.log( this.step );
//     //  return this
//   }
// };
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// ladder.up().up().down().showStep().down().showStep();

// Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.

// function user(name) {
// this = {};  (implicitly)
//   this.name = name;
//   this.isAdmin = false;
// return this;  (implicitly)
// }

// let user1 = new user("Jack");

// console.log(user1)

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user2 = new User("Jack");

// console.log(user2)

// function print(name) {
//   console.log("hello",name)
//   console.log(this)
// }
// // let user2 = new print("Jack");
// print("neel")

// console.log(this)

// function SmallUser() {
//   this.name = "John";

//   return "hello"; // <-- returns this
// } /* normally it return this object implicitly but if we return some object manually then it will return mauael object and
//  if we return primitive type then it return this.*/

// console.log(new SmallUser().name);

// function Calculator() {
//   function read() {
//     let a = +prompt("enter a");
//     let b = +prompt("enter b");
//     this.a = a;
//     this.b = b;
//   }
//   function sum() {
//     return this.a + this.b;
//   }
//   function mul() {
//     return this.a * this.b;
//   }
//   this.read = read;
//   this.sum = sum;
//   this.mul = mul;
// }

// // let calc = new Calculator();
// // calc.read();

// Calculator()



// let user = { 
//   name : "hello"
// }

// console.log(user.name)
// console.log(user?.name)




/*
Default has two options

1. if [Symbol.toPrimitive](hint) { } exists then it run convert according to it 
2.
  2.1.firstly it run toString() if it is valid primitive type then ok, otherwise run valueOf().
  2.2. if it is number hint then it firstly run valueOf() if it is valid primitive type then ok, otherwise 
  run toString().
*/

// let obj2 = {
//   name : 'neeffffffel1',
//   age : 21,
//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "string" ? this.name: this.age;
//   }
// }

// let obj2 = {
//   name : 'neeffffffel1',
//   age : 21,
//   toString() {
//     // return {name: "${this.name}"};
//     return "hello";

//   },

//   // for hint="number" or "default"
//   valueOf() {
//     return this.age ;
//   }
// }

// console.log(obj2 + 2)
// console.log(String(obj2))
// console.log(Number(obj2))

// let obj1 = {
//   name : 'neeel'
// }

// let obj2 = {
//   name : 'neeel1'
// }

// console.log(Boolean({}))
// console.log(obj1 == "[object Object]")
// console.log(obj2 > 3)



// let obj = {
//   name : 'neel'
// }

// console.log(obj.valueOf())


// let obj = {
//   name: "neel",
//   age: 100,
//   nearby: "surat",
// };

// // Define Symbol.iterator
// obj[Symbol.iterator] = function () {
//   // Convert object values to an array
//   let values = Object.values(this);
//   let index = 0;

//   return {
//     next() {
//       if (index < values.length) {
//         return { value: values[index++], done: false };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// // Now you can use for...of
// for (let value of obj) {
//   console.log(value); // Outputs: "neel", 100, "surat"
// }


// let arrayLike = {
//   "name": "Hello",
//   "address": "World",
//   length: 4
// };

// let arr = Array.from(arrayLike); // (*)
// console.log(arr)

// let nums = "12345"
// let arr = Array.from(nums,(data)=>{
//   return data*3
// });

// console.log(arr)


// let num = 12345


// console.log(Math.floor(num % 10))


// let user = {
//   name: "John"
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(JSON.stringify(descriptor, null, 2 ) )


let user = {
  name: "John",
  name: "Pete"
};

Object.defineProperty(user, "name", {
  configurable: false,
  writable : false,
});

// Object.defineProperty(user, "name", {
//   configurable: true
// });

user.name = "Pete"; // works fine
console.log(user)
delete user.name; // Error

