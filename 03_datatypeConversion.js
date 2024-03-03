// let score = 33
// let scoore = "33" 

// console.log(typeof(score));
// console.log(typeof(scoore));

// let num = "33abc"
// console.log(typeof(num)) // Output => String

// let valueInNumber = Number(num) // Converting the string value in num to a number
// console.log(valueInNumber) // It will give [NaN => Not a number]

// let a = null 
// console.log(a) // Output => null
// console.log(typeof a) // Output => object (As JS considers null as an object)
// console.log(null) // Output => type of a is "null"
// let valueInNumber = Number(a) // Converting the null value to a number
// console.log(typeof valueInNumber) // Output => number
// console.log(valueInNumber) // Output => 0

// let b = undefined
// console.log(b) // Output => Undefined
// console.log(typeof b) // Output => Undefined
// let ValueInNumber = Number(b) // Converting an undefined value into number
// console.log(ValueInNumber) // Output => NaN [Not a number]

// let c = true
// let c = false
// console.log(c) // Output => true/false depending on the boolean value
// console.log(typeof c) // Output => boolean

// let ValueIn_c = Number(c) // Converting a boolean value into number
// console.log(ValueIn_c) // Output => 1 for true & 0 for false
// console.log(typeof ValueIn_c) // Output => number

// let name = "Swarnava Dhar"
// console.log(name) // Ouptut => Swarnava Dhar
// console.log(typeof name) // Output => string

// let ValueInName = Number(name) // Converting the string name variable into number
// console.log(ValueInName) // Output => NaN [Not a number]
// console.log(typeof ValueInName) // Output => number

// let isLoggedIn = true
// let isLoggedIn = false
// console.log(isLoggedIn) // Output => true/false depending on the boolean value

// let check_isLoggedIn = Boolean(isLoggedIn) // Converting the isLoggedIn(already boolean) variable into boolean 
// console.log(check_isLoggedIn) // Output => true

// let is_LoggedIn = ""
// console.log(is_LoggedIn) // (It will give nothing.. just some b)
// let check_is_LoggedIn = Boolean(is_LoggedIn) // Converting isLoggedIn variable into boolean
// console.log(check_is_LoggedIn) // Output => false (As it's an empty string)

// let IsloggedIn = "Swarnava"
// console.log(IsloggedIn) // Output => Swarnava
// let check_IsLoggedIn = Boolean(IsloggedIn) // Converting the string variable into boolean
// console.log(check_IsLoggedIn) // Output => true (As it's not an empty string)

/*
NOTE:- 
"33" => 33 (Here we are converting a string to number, Output => 33)
"33abc" => ?? (It will not convert, Output => NaN[Not a number])
*/

let num = 33
let string = String(num) // Converting num into string
console.log(string) // Output => 33 (but as a string)
console.log(typeof num) // Output => number (checks the type of the variable num)
console.log(typeof string) // Output => string (checks the type of the variable string)