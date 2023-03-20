const printPlanets=({data})=>{
    for (let planet of data.results){
        const ul=document.querySelector("#name")
        const newLi=document.createElement("li")
        newLi.innerText=planet.name
        ul.appendChild(newLi)
    }
return Promise.resolve(data.next)
}

async function getPlanets(){
    try{
        const res=await axios.get("https://swapi.dev/api/planets/");
        console.log(res)
        printPlanets(res)
    } catch (err){
        console.error("error", err)
    }``
}
getPlanets()