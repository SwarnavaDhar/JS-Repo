// function definition

function hi (){
    console.log("H")
    console.log("E")
    console.log("L")
    console.log("L")
    console.log("O")
}

// hi --> function's reference
// hi () --> functions's execution

// hi // It will give nothing, because it's a reference
// hi() // Output => "HELLO"

/*
function add(a,b) // function definition and giving parameter within brackets
{
    console.log(a + b)
}
add() // Output => NaN, as there are no arguments given, like the below one
add(10,20) // function calling and arguments 
*/

/*
function addnums(a,b){
    console.log(a + b) // It will print 30
}
const Result = addnums(10,20)
console.log(Result) // Output => undefined
*/

/*
function addnums(a,b){
    let result = a + b
    return result
    // console.log(result) // This will not execute, after return statement, each and every line of code is unreachable
}
const result = addnums(10,20)
// console.log(result) // Output => 30
*/

/*
function logInUser(userName){
    return `${userName} just logged in`
}
// console.log(logInUser()) // Output => "undefined"
console.log(logInUser("Swarnava")) // Output => Swarnava
*/

// console.log("*********************************************** Functions Part 2 **************************************************************")

// ... -> Rest parameters aka spread parameters, basically takes all the arguments or can say rest of the arguemnts
/*
function calculateCartPrice(...values){
    return values
}
// console.log(100,200,500,1000) // It will give individual values
console.log(calculateCartPrice(100,200,500,1000)) // Will give values in an array form
*/

/*
function calculateCartPrice(val1, val2, ...values){
    return values
}
console.log(100,200,500,1000) // It will give individual values
console.log(calculateCartPrice(100,200,500,1000)) // Output => [500,1000] , 100 & 200 were taken by val1 & val2
*/