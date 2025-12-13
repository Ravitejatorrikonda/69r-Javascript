/**
 * 
 * 
 * Error handling javascript:-
 * ---------------------------
 * try catch throw finally
 * 
 * 
 * try{
 * 
 * }catch(error){
 * console.log(error)
 * }
 * 
 */





// try {
//     var x=10
// console.log(a)
// } catch (error) {
//     console.error(error)
// }
// console.log(x)




// function x(val1,val2){
//     try {
//         if(val2==0){
//             throw new Error("cant divisable by '0' ")
//         }else{
//             console.log(val1/val2);
//         }
//     } catch (error) {
//         console.error(error.message)
//     }

// }
// x(10,10)


fetch("http://localhost:3000/dat", { "method": "GET" })
    .then(res => {
        try {
            if (!res.ok) {
                throw new Error("Something went wrong");

            }
            return res.json()
        } catch (error) {
            console.error(error.message)
        }
    }).then(res=>console.log(res)).catch(data=>{
        console.log(data)
    })