async function userData() {
    let res = await fetch("http://localhost:3000/data")
    try {
        if (!res.ok) {
            throw new Error("Something went wrong");

        }
        let data = await res.json()
        showData(data)
    } catch (error) {

    }
}

function showData(data){
    let container=document.getElementById("container")
    data.forEach(ele => {
        let item=document.createElement("div")
        item.innerHTML=`
        <h4>Name :${ele.name}</h4>
        <img src='${ele.image}'>
        `
        container.appendChild(item)
    });
}

userData();