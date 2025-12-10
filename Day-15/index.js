/**
 * 
 * 
 * Promise
 * 
 * 
 */

// let promise1=new Promise((resolve,reject)=>{
//    if(false) resolve("success")
//     else reject("failure")
// })
// promise1.then(res=>console.log(res)).catch(res=>console.warn(res));

// const URL="https://dummyjson.com/todos";
// fetch(URL).then(res=>res.json()).then(data=>console.log(data))




// const URL="https://fakestoreapi.com/products";
// // console.log(fetch(URL))

// fetch(URL)
// .then(res=> res.json())
// .then(data=>{
// for(i=0;i<=data.length;i++){
//     console.log(data[i].title)
// }

// })


const URL = "https://dummyjson.com/todos"
fetch(URL)
.then(res => res.json())
.then(data => {
    // console.log(data.todos)
    for(i=0;i<=data.todos.length;i++){
        console.log(data.todos[i].todo)
    }
})