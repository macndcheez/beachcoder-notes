const img=document.getElementById("myPhoto")
console.dir(img)

const p=document.getElementById("main")
console.dir(p)

const inputs=document.getElementsByTagName("input")

for (let input of inputs){
    console.log(input)
}

let header=document.getElementsByClassName("header")
let test=document.getElementsByClassName("main")
let testTwo=document.getElementsByClassName("special")
let testThree=document.getElementsByTagName("special")

let ul=document.getElementsByTagName("ul")[0]
let nestedUl=ul.getElementsByClassName("special")

let testFour=document.querySelector("h1")
let testFive=document.querySelector("input")

let testSix=document.querySelector("#myPhoto")

let mainOne=document.querySelector("#main")

let mainTwo=document.getElementById("main")

const testSeven=document.querySelector(".special")

const testEight=document.querySelector("li.special")

const testNine=document.querySelector("section li.special")

const testTen=document.querySelector("input[type=password]")

const testEleven=document.querySelectorAll("input")

const testTwelve=document.querySelectorAll(".special")

const h1=document.querySelector("h1")
console.log(h1.innerText)

console.log(ul.innerText)

// h1.innerText="Hello World"

ul.innerText="I am a ul"

console.log(h1.textContent)

h1.textContent="I r hangry"

const par=document.querySelector("#main")
console.log(par.innerText)
console.log(par.textContent)

console.log(par.innerHTML)

const form=document.querySelector("form")
console.log(form.innerHTML)

// form.innerHTML="Hello World"

// form.innerHTML="<b>I am a bold tag.</b>"

h1.innerHTML+=" is cool"
h1.innerHTML+="<b>!!!!</b>"
h1.innerText+="<b>!!!!</b>" //prints test as is because innerText not innerHTML

console.dir(testEleven)