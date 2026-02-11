// function task(val,callback){
//     console.log(val)    
//     callback()
// }

// task(1,function(){
//     console.log("hello1")
//     task(2,function(){
//         console.log("hello2")
//     })
// })


let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  // setTimeout(() => resolve("done"), 8000);
  // reject("exit")
  setTimeout(()=>console.log("inside of timeout"))

  resolve("done")

  console.log("in promise")


});

promise.then((result)=>{
console.log(result)
}).catch((e)=>{
    console.log("in catch",e)
})
  console.log("in outside")


console.log(this?.global);
