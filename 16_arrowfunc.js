const user =  {
    username:"Krisna",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username} , welcome to website`) // this keyword is used to access all the variables in the present scope
        // console.table(this)
    }
}
// user.welcomeMsg() // Output => Krisna, welcome to website
// console.log(this) // Output => {} -> empty object

/*
// This is not a good practice
user.username = "Shyam"
user.welcomeMsg() // Output => Shyam, welcome to website
*/

/*
function one(){
    console.log(this.username) // Output =>  Undefined, this cannot be used in function
}
one()

const two = function(){
    let username = "Swarnava"
    console.log(this.username) // Output =>  Still Undefined, this cannot be used in function
}
two()
*/

// Arrow functions
const three = () => {
    let username = "Swarnava"
    console.log(this.username) // Output =>  Still Undefined, this cannot be used in function
}
three()

/*
Syntax -> ( "take parameters in the brackets" ) => { "return in curly braces" }
 */

/*Basic arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5,4))*/

// If we use curly braces after arrow function we have write return function 
// otherwise we can write it in parenthesis or no brackets at all
const addTwo = (num1, num2) => num1 + num2
//console.log(addTwo(2,4))

// object print
// const name = () => {username: "Swarnava"} // Undefined
// console.log(name())

// To rightfully print an object we have to use parenthesis, let's write the above code rightfully
const nam = () => ({username: "Swarnava"}) // Output -> {username: 'Swarnava'}
console.log(nam())



