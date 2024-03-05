// *******************************************Numbers**************************************************************************************
// const score = 400
// console.log(score) // Output => 400
// console.log(typeof score) // Output => number

// const balance = new Number(400) 
// console.log(balance) // Output => [Number: 400]
// console.log(typeof balance) //Output => Object

// console.log(balance.toString()) // Coverting the datatype from number to string to use more properties.
// console.log(balance.toFixed(2)) // Output => 400.00 --> adds zeroes after point

// const num = 123.8966
// console.log(num.toPrecision(2)) //Output => 1.2e+2 (3 precision value and the rest is exponenetial)
// console.log(num.toPrecision(3)) // Output => 124 
// console.log(num.toPrecision(4)) // Output => 123.9
// console.log(num.toPrecision(5)) // Output => 123.90

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) // converting the value into Indian Rupee Number System, Output => 10,00,000

// *******************************************Math**************************************************************************************

// console.log(Math.abs(-4)) // Negative to Positve, Output => 4
// console.log(Math.round(4.6)) // Rounds of the value, Output => 5
// console.log(Math.ceil(4.5)) // Rounds of, and always takes the upper value, Output => 5
// console.log(Math.floor(4.5)) // Rounds of, and always takes the lower value, Output => 4
// console.log(Math.max(1,2,3,4)) // Output => 4
// console.log(Math.min(1,2,3,4)) // Output => 1

// console.log(Math.random()) // Always generates a random value between 0 and 1
// console.log((Math.random()*10)+1)
// console.log(Math.floor((Math.random()*10)+1)) // Now this will give values which are between 1 - 10

//Let's say you want to print the value between 10 and 20

const min = 10
const max = 20
// console.log(max - min + 1) // Output => 11
// console.log(Math.random() * (max - min + 1)) // Gives random values everytime between 1 - 10 , Output => eg --> 5.776028915155582
// console.log(Math.floor(Math.random() * (max - min + 1))) // Gives random values everytime between 1 - 10 and takes the round of floor value Output => eg --> 3
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Gives random values everytime between 10 - 20 (as 10 is min) and takes the round of floor value Output => eg --> 15