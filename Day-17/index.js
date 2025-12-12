/**
 * 
 * methods:-
 * GET,DELETE, POST PATCH PUT 
 * 
 * 
 */
// let options={
//     "method":"GET"
// }

// fetch("http://localhost:5000/products",options)
// .then(res=>res.json())
// .then(data=>console.log(data))

// let options = {
//     "method": "POST",
//     "headers": {
//           "Content-Type":"applicatio/json"
//     },
//     "body":JSON.stringify(
//         {
//         "id":"3",
//         "name":"hansi"
//     }
//     )
// }
// fetch("http://localhost:5000/products", options)
//     .then(res => {
//         if (res.ok) {
//             console.log(res.status, res.statusText)
//         }
//     }).catch(res => console.log(res))



fetch("http://localhost:5000/products/3",{
    "method":"PATCH",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
       
        "name":"hanshitha"
    })
}).then(res=>{
    if(res.ok){
        console.log(res.status,res.statusText)
    }
}).catch(data=>console.log(data))
/**
 * 
 * 
 * GET,POST,PUT,PATCH,DELETE
 * 
 * Array methods
 * array itarative methods
 * error handling
 * async and await
 * DOM->API,BOM,Events
 * weather app
 * user and admin dashboard
 * local storeage
 * 
 * string methods
 * objects
 * ES6->features
 * 
 * 
 */