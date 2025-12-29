/**
 * 
 * 
 * 
 * 
 * 
 */

// let div1=document.createElement("div")
// div1.innerText="<i>Hello There 1</i>"
// document.body.appendChild(div1)
// let div2=document.createElement("div")
// div2.innerHTML="<i>Hello There 2</i>"
// document.body.appendChild(div2)

// let div=document.createElement("div")
// div.id="main"
// div.className="container"
// div.setAttribute("name","grid");
// console.log(div)

// let arr=["html","css","js","react"]
// let container=document.createElement("div")
// arr.forEach((ele)=>{
// let item=document.createElement("div")
// item.innerHTML=ele
//     container.appendChild(item)
// })
// document.body.appendChild(container)

// let arr = [{
//     "id": "1",
//     "name": "Ravi",
//     "adress": "skdbv",
//     "pincode": "50085"
// }]

// let container = document.createElement("div")
// arr.forEach((obj) => {
//     let item = document.createElement("div")
//     item.innerHTML = `
//     <p>ID : ${obj.id}</p>
//     <p>Name : ${obj.name}</p>
//     <p>Adress : ${obj.adress}</p>
//     <p>pincode : ${obj.pincode}</p>
//     `
//     container.appendChild(item)
// })
// document.body.appendChild(container)

async function getData() {
    let res = await fetch("http://localhost:3000/products")
    try {
        if (!res.ok) {
            throw new Error("Something went wrong");

        }
        let data = await res.json()
        showData(data);
    } catch (error) {
        console.log(error.message)
    }

}

function showData(data){
    let container=document.createElement("div")
    container.id="main";
    data.forEach(obj => {
        let item=document.createElement("div")
        item.innerHTML=`
        <p> ID : ${obj.id}</p>
        <h3>Price : ${obj.price}</h3>
        <h4>category : ${obj.category}</h4>
       <img src=${obj.image}>
        
        `
        container.appendChild(item)
    });
    document.body.appendChild(container)
}




getData()