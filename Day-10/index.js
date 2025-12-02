/**
 * 
 * 
 * Anonymous function:-
 * -----------------------
 * a function which does not have function name is known as anonymous function
 * 
 * sy:-
 * =====
 *          function ([parameters]){
 *              //statements
 *              [return keyword]
 * }
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


// function x(){
//     console.log("THis is Named function");
    
// }
// x()

// function x(callback1){
//     callback1();
   
// }
// x(function y(){
//     console.log("Hello There")
// })


// var x=function (){
//     console.log("Anonymous function");
    
// }
// x()

// function x(callback){
//     console.log("This is choc icecream");
//     callback();
    
// }
// x(function (){
//     console.log("this is cherry icecream")
// })



// function sum(callback){
//     console.log("Hello There")
//     callback()
// }
// sum(function (){
//     console.log("anonymous func as a callback");
    
// })

// function getData(val,callback){
// callback(val+10)
// }
// getData(10,function (a){
//     console.log(a);
    
// })

// var x=function getData(sum){
//     console.log("Hello There");
//     sum()
// }
// x( function (){
//     console.log("Hello There 2");
    
// })

// function printData(sum,sub){
//     // sum(10,20)
//     // sub(10,20)

    
//     console.log(sum(10,20));
//     console.log(sub(10,20));
// }
// printData(
//     function (a,b){
//        return a+b

// }, function (a,b){
//      return a-b
// }


// )

/**
 * 
 * Arrow function in Js:-
 * ----------------------
 * A function which is does not have a function name and function keyword and it is represented in arrow symbol is known as arrow function
 * it is mainly used in asynchronous operation
 * 
 * sy:-
 * ---
 * 
 *           ()=>{
 * //statements
 * }
 * 
 * 
 * if arrow function has a single statement no need of giving the curly braces ({})
 * if arrow function has a single paramaeter non need of giving the ().
 * 
 * 
 * 
 * 
 */

// var a=()=>{
//     console.log("This is arrow fun")
// }
// a()


// var a=(20)=>{
//     console.log(a);
    
// }



// function sum(callback){
//     console.log("Named function");
//     console.log(callback(20));
    

    
// }
// sum(a=>{return a})


function getdata(val,sum){
    sum(val+10);
}
getdata(10,a=>console.log(a))
