// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul","hello", "of the Roman Republic"];
// console.log(rest)

// let {height, width, title} = { title: "Menu", height: 200, width: 100 }
// console.log(height)

// let obj = { title: "Menu",
//     //  height: 200, 
//      width: 100,
//     print(){
//         console.log("hello")
//     }};
 
// let { print ,height = 222, width : www, title } = obj; // = is use for default value and : is use for another name also can use as combination height: h = 200

// // print()
// console.log(height)
// console.log(www)
// console.log(title)


// let title, width, height;

// // error in this line
// ({title, width, height} = {title: "Menu", width: 200, height: 100})

// console.log(width)

// Starts with {: JS thinks it's a Code Block (fails).
// Starts with ({: JS knows it's an Expression (works).
// Starts with let {: JS knows it's a Declaration (works).

// let obj = {
//     name : "neeel",

//     age : 0,
//     address : "surat"
// }

// let { age : a = 100 ,...rest } = obj

// console.log(a,rest)

// function showDetails({name : n = "hello", age : a, address} = {}){
//     console.log(n,address,a)
// }
// showDetails()

// const user = { id: 1, info: null };
// const { info: { age = 25 } = {} } = user;
// console.log(age);

// let options = {
//   size: {
//     // width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// let { 
//   size: s, 
//   size: { width: w = 99,height : h } 
// } = options;

// console.log(s,w,h)

// default value only applied when value is undefined









// const data = 111..toString()

// console.log(data)
