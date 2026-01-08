/**
 * 
 * BOM:-(Browser object model)
 * -----------------------------
 * 
 * 
 * 
 * 
 */

// let resultWindow;
// function openWindow(){
//     resultWindow= window.open("","","width=500px,height=500px")
//     resultWindow.document.writeln(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//         <style>
//         h4{
//         color:green;
//         }
//         </style>
//         </head>
//         <body>
//         <h4>Hello </h4>
//         </body>
//         </html>

//         `)



//     // window.setTimeout(()=>{
//     //     resultWindow.close();
//     // },5000)
// }

// function closeWindow(){
//     let flag=window.confirm("do you want to close "+resultWindow);
//     if(flag){
//         resultWindow.close();
//     }else{
//         window.alert("Thank You!")
//     }
// }


// function startWindow() {
    // window.setInterval(() => {
    //     window.location.reload()
    // }, 1000)
// }
// let result=null;

// function startWindow(){
//     let i=1;
//    result= window.setInterval(()=>{
//           let date=new Date()
//           console.log(`HR : ${date.getSeconds()}`)
//     },1000)
// }
// function closeWindow(){
//     window.clearInterval(result)
// }

// localStorage.setItem("name","malli")
// console.log(localStorage.getItem("name"))

function saveData(){
   let input= document.getElementById("fname")
   localStorage.setItem("NAME",input.value)
}