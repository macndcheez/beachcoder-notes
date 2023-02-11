// alert("test") window that pops up
let userClass="wizard";
let treasure='gems';
console.log(`the ${userClass} found ${treasure}`) //adding together; $ is variable
console.log("the "+ userClass + "found" + treasure)

let luckyNum=7; //let is redefined
let unluckyNum=13;
console.log(luckyNum+unluckyNum)
console.log(luckyNum-unluckyNum)
console.log(luckyNum*unluckyNum)
console.log(luckyNum/unluckyNum)
console.log(luckyNum%unluckyNum===0) //modulo checks for remainder; boolean is t/f

luckyNum=10
console.log(luckyNum)
const faveNum=6
// faveNum=7 

luckyNum=luckyNum+2
console.log(luckyNum)
luckyNum+=2 //custom num
luckyNum++ //add one
luckyNum-- //take one away
luckyNum-=5 //don't really use
luckyNum/=7 //don't really use
luckyNum*=6 // don't really use
console.log(luckyNum)
let isOffline=true
console.log(4===5)
console.log(4==="4")
console.log(4=="4") //don't use
console.log(4!==4)
console.log(4!="5") //don't use

let user=null;
console.log(user) //null
let loggedIn;
console.log(loggedIn) //undefined

let str="Cookie barked at the mailman."
console.log(str.toUpperCase())

let rawData="     Greg      ";
let cleanData=rawData.trim();
console.log(cleanData.length)
let selExample=cleanData.slice(2)
let exTwo=cleanData.slice()
let song="twinkle twinkle"
let song2=song.slice(0,7)
console.log(song[3])
let newNum="6"
let otherNum='8'
console.log(newNum+otherNum)

const age='5'+'4'

const dog='pup'
dog[2] //p

let song3='london calling'
song3.toUpperCase()

let userInput="   Greg.com   "
cleanInput=userInput.trim().toLowerCase()

let park="yellowstone"
const parkIndex=park.indexOf('stone') //7

let quiz1="GARBAGE!".slice(2).replace("B","") //RAGE!

const stepOne=Math.random();
const stepTwo=stepOne*10;
const stepThree=Math.floor(stepTwo);
const stepFour=stepThree+1;
console.log(stepFour)
const ranNum=Math.floor(Math.random()*10)+1 //how to get #1-10
const numTwo='24'
console.log(parseInt(numTwo),typeof numTwo);
console.log("a"<"A")
console.log(.1<=.5)
console.log('waefiojaeofiw'.length >="hello".length)

//if's and else if statements
let password="tigers"
if (password.length>=6){
    if (password.indexOf(" ")!==-1){
        console.log("no space in password")
    } else{
        console.log("password accepted")
    }
}
else{
    console.log("password needs to be longer")
}

//and/or operators
console.log(true&&true)
console.log(false&&true)
console.log(1<=15&&"abc"==="abc")

if (password.length>=6&&password.indexOf(" ")===-1){
    console.log("valid password")
} else {
    console.log("invalid password")
}

-1!==-1||10===10
10/2===5||null
let personAge=4
if (personAge<6||personAge>=65){
    console.log("you get in for free")
}   else{
    console.log("child price:$5 adult price:$10")
}

let choice="beef jerky";
if (choice==="cheez its"||choice==="beef jerky"||choice==="fat sals"){
    console.log("good choice")
}   else{
    console.log("lets pick something else")
}

let mysteryNum=Infinity
if (mysteryNum){
    console.log("truthie")
}   else{
    console.log("falsie")``
}

