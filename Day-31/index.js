/**
 * 
 * BOM:-(Browser object model)
 * ----------------------------
 * 
 * splice, map, filter, foreach
 * 
 */

async function fetchData() {
    let res = await fetch("https://fakestoreapi.com/products")
    try {
        if (!res.ok) {
            throw new Error("Something went wrong");

        }
        let products = await res.json();
        // console.log(products)
        // localStorage.setItem("products", JSON.stringify(products))
        displayData(products);
    } catch (error) {
        console.log(error)
    }
}

//filterbtn


function filterBtn(){
   let products=JSON.parse(localStorage.getItem("products"))
   let data=products.map(product=>product.category)
  let set=new Set(data)//removing dublicates
  filterdata=Array.from(set)//object into array
let container=document.getElementById("container-btn")
filterdata.forEach(products=>{
   let btn=document.createElement("button")
   btn.textContent=products;
btn.onclick=()=>{
    filterData(products)
}

   container.appendChild(btn)
})
}

//Filter Data

function filterData(category) {
    // let cat = window.prompt("Enter a filter data")
    let products = JSON.parse(localStorage.getItem("products"))
      
    let data=products.filter(product=>product.category==category)
    // console.log(data)
    displayData(data)

}



//display data

function displayData(products) {
    // let products = JSON.parse(localStorage.getItem("products")) || []
    if (products.length == 0) {
        fetchData();
    } else {
        let container = document.getElementById("container")
        container.innerHTML="";
        products.forEach((product,index) => {
            let item = document.createElement("div")
            item.innerHTML = `
            <img src='${product.image}'>
            <h3>ID : ${product.id}</h3>
            <p>Price : ${product.price}</p>
            <p>category : ${product.category}</p>
            <button onclick="deleteData(${index})">Delete</button>
            `
            container.appendChild(item)
        });
    }
}

//Delete Data

function deleteData(index){
   let products=JSON.parse(localStorage.getItem("products"))||[]
   products.splice(index,1)
   localStorage.setItem("products",JSON.stringify(products))
   displayData(products)
}


// fetchData()
window.onload=()=>{
    let products=JSON.parse(localStorage.getItem("products"))||[]
    if(products.length==0){
        fetchData();
    }else{
        displayData(products)
        filterBtn()
    }
}