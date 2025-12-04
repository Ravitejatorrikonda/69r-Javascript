/**
 * 
 * 
 * History of js
 * what is js
 * v8 engine
 * Data types
 * Variables
 * operators
 * conditional statements
 * Loops
 * GEC
 * FEC
 * Hoisting
 * FUnctions
 * 
 *
 * Synchronus and asynchronus:-
 * ----------------------------
 * 
 * Callstack:-
 * ------------
 * 
 * 
 * 
 * 
 * 
 */

// function x(){
//     console.log("Hello There")
//     y()
// }
// function y(){
//     console.log("Hi there")
// }
// x()


// function sum(){
//     var a=10;
//     console.log(a)
// }
// sum()
// console.log(a)

// console.log(1);
// console.log(2);

// setTimeout(()=>{
// console.log(3)
// }, 3000)

// console.log(4);

// function x(){
// setTimeout(() => {
//     console.log("x function")
// }, 1000);
// }
// function y(){
// setTimeout(() => {
//     console.log("y function")
// }, 2000);
// }
// function z(){
// setTimeout(() => {
//     console.log("z function")
// }, 3000);
// }
// y()
// z()
// x()


// function getData(){
//     console.log("start")
//     setTimeout(() => {
//         console.log("Timeout")
//     }, 3000);
// }
// getData();
// console.log("END")



function sum(val, callback) {
    callback(val + 10)
}
function sub(val, callback) {
    if(false)
        callback(val - 5);
    else
    console.log("something went wrong")
}
function mul(val, callback) {
    callback(val * 5)
}
function div(val, callback) {
    callback(val / 2)
}
// sum(10,sumres=>console.log(sumres))
// sub(20,subres=>console.log(subres))
// mul(15, mulres=>console.log(mulres))
// div(75,divres=>console.log(divres))


sum(10, sumres => {
    console.log(sumres)
    sub(sumres, subres => {
        console.log(subres)
        mul(subres, mulres => {
            console.log(mulres)
            div(mulres, divres => {
                console.log(divres)
            })
        })
    })
})



