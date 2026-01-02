/**
 * 
 * 
 * 
 * 
 * 
 */

// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")

// btn1.onclick = () => {
//     // alert("javascript is awesome")
//     document.body.style.background = "red";
//     btn2.remove();

// }
// btn2.ondblclick = () => {
//     alert("69r students awesome")
// }

// let btn=document.getElementById("btn")
// let container=document.getElementsByClassName("container")[0]
// btn.onclick=()=>{
//     container.style.opacity="0"
// }
async function getData() {
    let res = await fetch("https://fakestoreapi.com/products")
    try {
        if (!res.ok) {
            throw new Error("API getting error");

        }
        let products = await res.json();
        showData(products)
    } catch (error) {

    }
}
function showData(products) {
    let container = document.getElementById("container")
    products.forEach((obj,index) => {
        let item = document.createElement("div")
        item.innerHTML = `
      <img src='${obj.image}'>
      <p>Title : ${obj.title}</p>
      <p>Price :${obj.price}</p>
      <p>Description : ${obj.description}</p>
      <button id="deleteData${index}">Remove</button>
      `
        container.append(item)




        // let btn1 = document.getElementById(`deleteData${index}`);
        // btn1.onclick = () => {
        //  item.remove();

        // }
       
       
    });
}









