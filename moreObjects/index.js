for(let i=0;i<=5;i++){
    console.log(i)
}

let j=0;
while (j<=5){
    console.log(j)
    j++
}

const target=Math.floor(Math.random()*10)
console.log(target)
let guess=Math.floor(Math.random()*10)
while (guess!==target){
    console.log(`target number ${target} guess number ${guess}`)
    guess=Math.floor(Math.random()*10)
}
console.log(`target number ${target} guess number ${guess} you win`)

for (let i=0;i<=10;i++){
    console.log(i)
    if (i===5){
        break
    }
}

while (true){
    console.log(`target number ${target} guess number ${guess}`)
    guess=Math.floor(Math.random()*10)
    if(target===guess) break
}
console.log(`target number ${target} guess number ${guess} you won`)

let hobbies=["books","soccer","painting","video games"]
for (let i=0;i<hobbies.length;i++){
    console.log(hobbies[i])
} //traditional for loop

for (let hobby of hobbies){
    console.log(hobby)
} //more used now

let complete=[]
for (let char of "bubbaduke"){
    complete.push(char)
    console.log(char.toUpperCase())
}
console.log(complete.join(" ")) 

let magicSquare=[
    [8,1,6],
    [3,5,7],
    [4,9,2]
]
for (let i=0;i<magicSquare.length;i++){
    let row=magicSquare[i]
    let sum=0
    for(let j=0;j<row.length;j++){
        console.log(row[j])
        sum+=row[j]
    } console.log(`${row} summed to ${sum}`)
    console.log(sum)
} //longer version for loop

for (let row of magicSquare){
    let sum=0
    for(let num of row){
        sum+=num
    }
    console.log(`${row} summed to ${sum}`)
} //for of same function as above

const phraseOne=['caramel','hot','milk','hot'];
const phraseTwo=['popcorn','butter','duds','dogs']

for (let i=0;i<phraseOne.length;i++){
    console.log(`${phraseOne[i]} ${phraseTwo[i]}`)
}

// let completed=[]
// for (let word of phraseOne){
//     console.log(word)
//     completed.push(word)
//     for (let word of phraseTwo){
//         console.log(word)
//     }
    
// } failed attempt at for of loop with array

const testScores={
    greg:100,
    darcy:75,
    lorey:45,
    eric:72
}
for (let person of Object.keys(testScores)){
    console.log(Object.keys(testScores))
    console.log(person)
}

let total=0
for (let score of Object.values(testScores)){
    total+=score
}

let scoresTotal=0
for (person in testScores){
    console.log(person)
    scoresTotal+=testScores[person]
}

let fruit="orange"

//functions

function jukebox(){
    console.log("Road shimmer")
    console.log("wiggling the vision")
    console.log("i'm swimming in a mirror")
}
// jukebox()
// jukebox()
// jukebox()

for (let i=0;i<=20;i++){
    console.log(jukebox())
}

function ddDiceRoll(){
    let roll=Math.floor(Math.random()*12)+1
    console.log(`dice roll ${roll}`)//will end after return
}

function defensiveRolls(){
    ddDiceRoll()
    ddDiceRoll()
    ddDiceRoll()
    ddDiceRoll()
}

function greet(name){
    console.log(`hello ${name}`)
}

function diceRolls(num){
    for (let i=0;i<num;i++){
        ddDiceRoll()
    }
}

