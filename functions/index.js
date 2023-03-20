function divide(x,y){
    return x/y
}

function square(x){
    return x*x
    console.log("tested")
}

function luckyNumber(num){
    if (num===12){
        return true
    } else {
        return false
    }
}

function luckyNumberOne(num){
    return num===12
} //condensed version of 10-15

function faveSnack(snack){
    return snack.toLowerCase()==="cheez its"
}

function newFaveSnack(arr){
    for (let snack of arr){
        if (snack==="cheez its"||snack==="beef jerky"){
            return true
        }
    } 
    return false
}
let snackChoice=["black licorice","popcorn","donuts",]

function passwordChecker(username, password){
    if (password.length<10){
        return false
    }
    if (password.indexOf(" ")!== -1){
        return false
    }
    if (password.indexOf(username)!== -1){
        return false
    }
    return true
}

function passwordCheckerTwo(username, password){
    if (password.length<10||password.indexOf(" ")!==-1||password.indexOf(username)!==-1){
        return false
    }
        return true
} //shortened version of 36-46

function testScope(){
    let idea="Sell small drink umbrellas"
    console.log("1",idea)
    return idea
}
let idea=testScope()

let greeting="Hello"
function newGreeting(){
    const greeting="Hello World"
}
console.log(greeting)

const flavor="vanilla"
console.log(flavor)

function iceCreamTruck(){
    let flavor="chocolate" //defined but not called, not in use
}
iceCreamTruck()
console.log(flavor)

// function doubleNumbers(arr){
//     const numbers=[]
//     for (let num of arr){
//         let result=num*2
//         numbers.push(result)
//     }
//     console.log(result)
//     return numbers
// }
// let nums=[1,2,3]

const newFlavor=function(icecream){
    return icecream.toUpperCase()
}

// const square=function(x){
//     return x*x
// }

const newSquare=(x) =>{
    return x*x
}

const sum=(x,y) =>{
    return x+y
}

const finalSquare=x => {
    return x*x
}

const isEven=num => num%2===0

const faveNums=[1,2,3,4,5,6,7,8] 
const doubles=faveNums.map (n=>{
    return n*2
})
