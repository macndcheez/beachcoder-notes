let num=6
if(num<=1&&num<=10){
    console.log("number is between 1-10")
}   else{
    console.log("please guess a number 1-10")
}

let age=75
if(age<6||age>=65){
    console.log("you get in for free")
}   else{
    console.log("child price: $5 adult price:$10")
}

let symbol="shamrock"
if(symbol==="shamrock"){
    console.log("lucky")
}   else{
    console.log("bad luck")
}
symbol==="shamrock"? console.log("lucky"):console.log("unlucky") //condensed version of 13-17, : is else

let userStatus="online"
let color;
if(userStatus==="offline"){
    color="red"
}   else{
    color="green"
}
userStatus==="offline"? color="red":color="green"
console.log(color)

let myStuff=["shamrock",7,true,undefined]
console.log(myStuff)

let myColors=["red","green","blue"]
console.log(myColors[0])
console.log(myColors[myColors.length-1]) //starts at 0 so minus 1

let shoppingList=["cheesesticks","beer"]
shoppingList[0]="cheese head" //overrides cheesesticks
console.log(shoppingList)

shoppingList.push("pretzels")
shoppingList.pop()
// shoppingList.pop()
// shoppingList.pop()
shoppingList.unshift("poptarts")
shoppingList.shift()
console.log(shoppingList)

const fruit=["apple","banana"]
let veggies=["carrots","celery"]
let produce=fruit.concat(veggies)
let produceTwo=veggies.concat(fruit)
console.log(produceTwo)
let meats=["flank steak","chicken wings"]
let totalList=fruit.concat(veggies,meats)
console.log(totalList)
console.log(totalList.includes("carrots",2))

console.log(totalList.indexOf("chicken wings")) //tells you where it is in the list
console.log(totalList.slice()) //carbon copy

let fruits="orange"
let colors=fruits
fruits="watermelon"
console.log(colors)

let nums=[5,6,7,8]
let otherNums=nums
nums.push(9)
console.log(otherNums)

let pokemon=["charizard","ghastly","genghar"]
let newPokemon=["charizard","ghastly","genghar"]
console.log(pokemon===newPokemon)
pokemon=[]

const newColors=[
    ["red","green","blue"],
    ["orange","purple","white"],
    ["navy blue","turquoise","pink"]
]
console.log(newColors[2][1])

const fitbitData=[
    1500,
    20000,
    100000
]
const fitbitDataTwo={
    "daily steps":1500,
    caloriesBurned:20000,
    weeklyBurned:100000,
}   
console.log(fitbitDataTwo["daily steps"])

const colorsThree={
    red:"#ed4b4d",
    yellow:"#f9ca24",
    blue:"#30336b"
}
console.log(colorsThree.red)

const newColor="tomato"
colorsThree.newColor=newColor
console.log(colorsThree)

const student={
    firstName:"john",
    lastName:"doe",
    strengths:["math","science"],
    examScores:{
        midterm:45,
        final:81
    }
}
console.log(student.examScores.midterm)
let avg=(student.examScores.midterm+student.examScores.final)/2 //burrow down to exact ones


const game={
    playerOne:{
        piece:"x",
        color:"blue",
        wins:4
    },
    playerTwo:{
        piece:"o",
        color:"red",
        wins:3
    },
    gameBoard:[
        ["x","o","x"],
        [null,"x","o"],
        ["o","x",null]
    ]
}
console.log(game)

const user={
    userName:"greg",
    email:"fakeemail@gmail.com",
    notifications:[]
}
console.log(user.notifications.length===0)

for(let i=0;i<=10;i+=2){
    console.log("hello",i)
}

for(let i=5;i<=10;i+=3){
    console.log('hello',i)
}

for(let num=1;num<=20;num++){
    console.log(`${num}X${num}=${num*num}`)
}

for(let i=100;i>=0;i-=5){
    console.log('hello',i)
}

for(let i=100;i>0;i-=25){
    console.log("oops doesn't work")
}
console.log("after the loop")

// for(let i=20;i>=0;i++){
//     console.log("danger")
// } //infinite loop

const animals=["lions","tigers","bears"]
for(let i=0;i<animals.length;i++){
    console.log(i,animals[i])
}

const businessClients=[
    {
        clientName:"Bruce Wayne",
        finances:200000000
    },
    {
        clientName:"Clark Kent",
        finances:800
    },
    {
        clientName:"Oswald Copplepot",
        finances:1000000
    },
    {
        clientName:"Harley Quinn",
        finances:1
    }
]
for(let i=0;i<businessClients.length;i++){
    console.log(`${businessClients[i].clientName}`)
}

for (let i=0;i<businessClients.length;i++){
    let currentClient=businessClients[i]
    console.log(`${currentClient.clientName} has ${currentClient.finances}`)
}

const phrase="racecar"
for(let i=phrase.length-1;i>=0;i--){
    console.log(phrase[i])
}

for(let i=1;i<=10;i++){
    console.log("outer loop",i)
    for(let j=10;j>=0;j-=2){
        console.log("inner loop",j)
    }
}

const gameBoardTwo=[
    [12,19,25,32],
    [2,7,9,14],
    [16,45,32,18]
]
let totalScore=0
for(let i=0;i<gameBoardTwo.length;i++){
    console.log(gameBoardTwo[i])
    let row=gameBoardTwo[i]
    for(let j=0;j<row.length;j++){
        console.log(row)
        totalScore+=row[j]
    }
}
console.log(totalScore)