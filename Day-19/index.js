/**
 * 
 * array methods
 * array itarative methods
 * async and await
 * DOM
 *    ->API,EVENTS,BOM
 * 
 * object methods
 * String Methods
 * 
 * 
 * 
 * 
 */

//GET

// fetch("http://localhost:3000/products",{"method":"GET"})
// .then(res=>{
//   return  res.json();
// }).then(res=>console.log(res))

//DELETE
// fetch("http://localhost:3000/products/4",{"method":"DELETE"})
// .then(res=>{
//     if(res.ok){
//         console.log(res.statusText+" "+res.status)
//     }
// }).catch(data=>console.log(data))

//DELETE ALL
// fetch("http://localhost:3000/products")
// .then(res => {
//     return res.json()
// }).then(data => {
//     for (i = 0; i <= data.length; i++) {
//         // console.log(i)
//         fetch(`http://localhost:3000/products/${data[i].id}`, { "method": "DELETE" })
//             .then(res => {
//                 if (res.ok) {
//                     console.log(res.status, res.statusText)
//                 }
//             })

//      }
// })

//Post ALL

let data = [

    {
        "id": "1",
        "name": "Sowjanya"
    },

    {
        "id": "2",
        "name": "Mounika"
    },

    {
        "id": "3",
        "name": "Srinithya"
    },
    {
        "id": "4",
        "name": "malli"
    },
    {
        "id": "5",
        "name": "mani"
    }
]

let URL = "http://localhost:3000/products"
// let options={
//     "method":"POST",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify(obj)

// }
for (i = 0; i < data.length; i++) {
    let obj = data[i]
    // options.body=JSON.stringify(obj)
    fetch(URL, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(obj)

    }).then(res => {
        if (res.ok) {
            console.log(res.status, res.statusText)
        }
    })
}