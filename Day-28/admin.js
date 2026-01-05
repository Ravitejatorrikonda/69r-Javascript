async function fetchData() {
    let res = await fetch("http://localhost:3000/data")
    try {
        if (!res.ok) {
            throw new Error("something went wrong");

        }
        let data = await res.json();
        // console.log(data)
        showData(data)

    } catch (error) {
        console.log(error.message);
    }
}




function showData(data) {
    let container = document.getElementById("container")
    let item = document.createElement("div")

    item.innerHTML = data.map((student) => {
        return `
         
         <h3>ID : ${student.id}</h3>
         <h3>Name : ${student.name}</h3>
         <button id='delbtn${student.id}'>Delete</button>
         <button id='editbtn${student.id}'>Edit</button>
         `
    }).join("")

    container.appendChild(item)

    data.forEach(student => {
        let delbtn = document.getElementById(`delbtn${student.id}`)
        delbtn.onclick = () => {
           delData(student.id)
        }
        let editbtn=document.getElementById(`editbtn${student.id}`)
        editbtn.onclick=()=>{
            // console.log(student.id)
            editData(student.id);
        }
    });


}


//DELETE
async function delData(id) {
   let res=await fetch(`http://localhost:3000/data/${id}`,{"method":"DELETE"})
   try {
    if(!res.ok){
        throw new Error("Data not deleted");
        
    }
    alert("data successfully Deleted")
   } catch (error) {
    console.log(error);
   }
}
async function saveData(){
    let studentId=document.getElementById("studentId").value
    let name=document.getElementById("name").value
    let image=document.getElementById("image").value
    let obj={
        "name":name,
        "image":image
    }

    let stmethod=studentId?"PUT":"POST"
    let URL=studentId?`http://localhost:3000/data/${studentId}`:"http://localhost:3000/data"
   
    let res=await fetch(URL,{
    "method":stmethod,
        "headers":{
            "Content-type":"application/json"
        },
        "body":JSON.stringify(obj)
    })
    try {
        if(!res.ok){
            throw new Error("Data Not updated");
            
        }
        alert("data Updated successfully")
    } catch (error) {
        console.log(error.message)
    }
}

//editdata

async function editData(id){
    let studentId=document.getElementById("studentId")
    let name=document.getElementById("name")
    let image=document.getElementById("image")

    let res=await fetch(`http://localhost:3000/data/${id}`)
   let data=await res.json();
   studentId.value=data.id
   name.value=data.name;
   image.value=data.image;


}

document.addEventListener("DOMContentLoaded", fetchData)



/**
 * ler arr=["html","css","js"]
 * let newarr=arr.map(res=>console.log(res))
 * 
 * 
 * 
 */