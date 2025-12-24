/**
 * 
 * ASYNC and AWAIT
 * ---------------
 * To perform asynchronous operations
 * ->it is ES-8 update
 * ->asyn is return the promise object
 * 
 * DOM:-(DOCUMENT OBJECT MODEL)
 * ---------------------------------
 * 
 * 
 * 
 * 
 * 
 */

// let promise1=new Promise((res,rej)=>{
//     res("success")
// })
// promise1.then(res=>console.log(res)).catch(res=>console.log(res))


// function x() {
//     return new Promise(res => {
//         res("success")
//     })
// }
// // console.log(x())
// x().then(res=>console.log(res)).catch(res=>console.log(res))



// async function x(){
//     return "hello There"
// }
// console.log(x())
// x().then(res=>console.log(res))

// async function y() {
//     return new Promise(res=>{
//         res("success")
//     })
    
// }
// // console.log(y())
// y().then(res=>console.log(res))

// console.log(Promise.resolve("hello").then(res=>console.log(res)))


// async function x() {
//     let data=await "hello there"
//     console.log(data)
// }
// x()



// async function getData() {
//     let res=await fetch("http://localhost:3000/products/4")
//   try {
//     if(!res.ok){
//         throw new Error("something went wrong");
        
//     }
//     let data=await res.json();
//     // console.log(data)
// showData(data)
//   data.forEach(obj => {
//     console.log(obj)
//   });


//   } catch (error) {
//     console.log(error)
//   }
    
// }

// getData()

// async function getData() {
//    let res= await fetch("http://localhost:3000/products/3",{"method":"DELETE"})
//    try {
//     if(!res.ok){
//         throw new Error("Not DELETED");
        
//     }
//     console.log(res.status,res.statusText)
//    } catch (error) {
//     console.log(error)
//    }
// }
// getData()

// let promise1=new Promise(res=>{
//     setTimeout(()=>{
//         res("Hello There")
//     },1000)
// })
// promise1.then(res=>console.log(res))
// console.log("Hi There")

// async function x() {
//     let data=await "hello There"
//     console.log(data)
//     console.log("Hi There")
// }
// x()