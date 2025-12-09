/**
 * 
 * Promises:-
 * ----------
 * ->to perform asynchronus opeartions 
 * ->to oerc0ome the callback hell
 * ->it is defined a state of behaviour
 * 
 * sy:-
 * 
 * variable identifier=new Promise(callback);
 * 
 * 
 * 
 * 
 */

// let data = new Promise((resolve, reject) => {
//     reject("failure")
//     resolve("success")
// })
// data.then((res) => console.log(res)).catch(res => console.log(res))

// function data(){
//     return new Promise((resolve,reject)=>{
//         resolve()
//     })
// }
// data().then(res=>console.log("success")).catch(rej=>console.log("failure"))


// Promise.resolve("success").then(res=>console.log(res))
// Promise.reject("failure").catch(rej=>console.log(rej))


// function logA(){console.log("A")}
// function logB(){console.log("B")}
// function logC(){console.log("C")}
// function logD(){console.log("D")}
// logA()
// setTimeout(logB,0)
// Promise.resolve().then(res=>logC())
// logD()


// let promise1=new Promise(resolve=>{
//     console.log("started")
//     setTimeout(()=>{
//         resolve("success")
//     },1000)
//     console.log("End")
// })
// promise1.then(res=>console.log(res))


// function x() {
//     console.log("promise1")
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("promise1 success");
//         }, 3000)
//     })
// }


// function y() {
//     console.log("promise2")
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("promise2 success");
//         }, 1000)
//     })
// }
// function z() {
//     console.log("promise3")
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("promise3 success");
//         }, 2000)
//     })
// }


// x().then(res=>console.log(res))
// y().then(res=>console.log(res))
// z().then(res=>console.log(res))



// x().then(res1 => {

//     y().then(res2 => {

//         z().then(res3 => {
//             console.log(res1)
//             console.log(res2)
//             console.log(res3)
//         })
//     })
// })

