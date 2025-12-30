/**
 * 
 * 
 * geteelementyID
 * getElementsbyClassName
 * querySelectore
 * querySelectoreall
 * 
 */


// let arr=["html","css","js","react","java"]
// let container=document.getElementsByClassName("container")[0]
// arr.forEach((ele)=>{
// let item=document.createElement("div")
// item.innerHTML=ele
// container.append(item,"hello")
// })

function showWeather() {
    let input = document.getElementById("city")
    getWeather(input.value)
}
async function getWeather(city){
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5edcd129aamsh1801da50f0ccbf6p1940ecjsn708c3a00fbf6',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	displayData(result.main.temp)
} catch (error) {
	console.log(error.message);
}
}

function displayData(data){
    let container=document.getElementById("main")
    container.innerHTML=`
    <h3>TEMPARATURE : ${data}</h3>
    `
}