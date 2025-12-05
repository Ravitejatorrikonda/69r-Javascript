/**
 * 
 * callstack:-
 * ------------
 * synchronus vs asynchronus
 * -------------------------
 * 
 * 
 * 
 */

// console.log("start")
// setTimeout(()=>{
//     console.log("first callback")
// },3000)
// for(i=0;i<=50000;i++){
//     console.log("i");
// }
// setTimeout(() => {
//     console.log("secondn callback")
// }, 1000);


// function sum(val,callback){
//     callback(val+10)
// }
// function sub(val,callback){
//     callback(val-5)
// }
// function mul(val,callback){
//     callback(val*5)
// }
// function div(val,callback){
//     callback(val/2)
// }
// sum(10,sumres=>{
//     sub(sumres,subres=>{

//         mul(subres,mulres=>{

//             div(mulres,divres=>{
//                 console.log(divres)
//             })
//         })
//     })
// })

// function orderPlaced(callback) {
//     callback("order placed successfully")
// }

// function dispatch(callback) {
//     if(false)callback("dispatch success")
//         else console.log("something went wrong")
// }
// function shipping(callback) {
//     callback("shipping success")
// }
// function delivery(callback) {
//     callback("deliver success")
// }


// orderPlaced(res1 => {
//     console.log(res1)
//     dispatch(res2 => {
//         console.log(res2)
//         shipping(res3 => {
//             console.log(res3)
//             delivery(res4 => {
//                 console.log(res4)
//             })
//         })
//     })
// })


function orderPlaced(callback) {

    setTimeout(() => {
        callback("order placed")
    }, 3000)

}
function dispatch(callback) {

    setTimeout(() => {
        callback("order dispatched")
    }, 4000)

}
function shipping(callback) {

    setTimeout(() => {
        callback("order shipping")
    }, 2000)

}
function delivery(callback) {

    setTimeout(() => {
        callback("order delivered")
    }, 3000)

}

// orderPlaced(res1=>console.log(res1))
// dispatch(res1=>console.log(res1))
// shipping(res1=>console.log(res1))
// delivery(res1=>console.log(res1))












// orderPlaced(res1 => {
//     console.log(res1)
//     dispatch(res2 => {
//         console.log(res2)
//         shipping(res3 => {
//             console.log(res3)
//             delivery(res4 => {
//                 console.log(res4)
//             })
//         })
//     })
// })


/**
 * 
 * functions->callback
 * arrow func
 * anonymous fun
 * 
 * synchronus vs asynchronus
 * callstack
 * callback hell;
 * promise
 * fetch
 * json
 * async and await
 * array methods
 * error handling
 * DOM
 * 
 * 
 * 
 */


