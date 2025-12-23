/**
 * 
 * array itarative methods:-
 * async and await
 * DOM
 * 
 * 
 * MAP, FILTER, FIND, FOREACH, SOME, reduce, reduceright
 * 
 * FOREACH
 * 
 */
// forEach(callback);

// let arr=[1,2,3,4,5,6]
// function x(){
//     console.log("Hello There")
// }
// arr.forEach(x)

// let arr=[1,2,3,4,5,6,undefined, , "hello"]
// arr.forEach(ele=>{
//     console.log(ele)
// })

// // for(i=0;i<arr.length;i++){
// //     console.log(arr[i])
// // }


// let arr=[{"name":"raja"},{"name":"hello"},{"name":"there"},]
// arr.forEach((ele,index,arr)=>console.log(arr))


// let arr=["html","css","js"]
// //o/p:-newarr=["HTML","CSS","JS"]
// let newarr=[]

// arr.forEach(ele=>newarr.push(ele.toUpperCase()))
// console.log(newarr)


//o/p:-   newarr=[1,4,16,25,36]

// let newarr=[]
// for(i=0;i<arr.length;i++){
    // newarr.push(arr[i]**2)
    // }
    
    // arr.forEach(ele=>newarr.push(ele*ele))
    // console.log(newarr)
    
    // let arr=[1,2,4,5,6]

    // let newarr=arr.map(ele=>ele*ele)
    // console.log(newarr)


//     let arr=[1,2,3,4,5,6]

//    let newarr= arr.filter(ele=>{
//         if(ele%2==0){
//             return ele
//         }
//     })
//     console.log(newarr)

fetch("http://localhost:3000/data")
.then(res=>{
    
    try {
        if(!res.ok){
            throw new Error("something went wrong");
            
        }
         return res.json()
    } catch (error) {
        console.log(error.message)
    }
}).then(data=>{
    data.forEach(obj => {
        console.log(obj.name)
    });
})