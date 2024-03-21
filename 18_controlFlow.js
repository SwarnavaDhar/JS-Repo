// If statement

// === type checking, strict checking
const logIn = true
/*
if(2 === "2"){ // === -> checks the type as well, 1st 2 is num and 2nd 2 is string
    console.log("Logged In") 
}
else{
    console.log("Not Logged in")
}
*/

/*
const score = 200
if (score > 100){
    const power = "fly"
    console.log(`user power: ${power}`)
}
// console.log(power) --> Error - As its out of scope
*/

//Shorthand Notation
/*
const balance = 1000
if (balance > 500) console.log("test"),console.log("test2") // Bad practice
*/

/*
const loggedInFromGoogle = true
const loggedInFromEmail = true
if(loggedInFromEmail && loggedInFromGoogle){
    console.log("Allow user to enter")
}

const logInFromGoogle = true
const logInFromEmail = false
if(logInFromEmail || logInFromGoogle){
    console.log("Allow user to enter2")
}
*/

/*
// Switch 
const month = "mar" 
switch(month){
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("JFebruary")
        break;
    case "mar":
        console.log("March")
        break;
    default:
        console.log("Gand marao")
        break
    }
*/

/*
// truthy value --> if string has some value, it is truthy value
const email = "sd@mail.com"
if(email){
    console.log("got user mail")
}
else{
    console.log("no match found")
}
*/

// NOTE:  even a space in string is considered as a truthy value,
// empty function is also truthy value as well

/*
// false, 0, -0, BigInt 0n, "", null, undefined, Nan --  these all are falsy values
const useremail = ""
if(useremail){
    console.log("got user's mail")
}
else{
    console.log("no match")
}
*/ 

/*
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}
*/

// Nullish Coalesceing Operator(??) : null , undefined
let val1
val1 = 5 ?? 10
var1 = null ?? 15
vat1 = undefined ?? 10
vab1 = null ?? 12 ?? 20
// console.log(val1) // Output => 5
// console.log(var1) // Output => 15
// console.log (vat1) // Output => 10
// console.log(vab1) // Output => 12


// Teranary Operator
// Syntax --> condition ? true : false

const teaPrice = 15
teaPrice <= 15 ? console.log("less than or equal to 15") : console.log("more than 15")