// Datatypes ---> i) Primitive , ii) Non Primitve (Reference)

// i) Primitive ---> 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Symbol => An unique datatype in javascript used for storing inique values (eg => id of an employee)

/*
// Let's understand symbol by a small example

const id = Symbol('123')
// console.log(id); // Output => Symbol(123)

const anotherId = Symbol('123')
// console.log(anotherId) // Output => Symbol(123)

console.log(id == anotherId) // Although their values are same, but as Symbol is unique, it is treating both id and anotherId differently
*/

// ii) Non-primitive ---> 3 types : Arrays, Objects, Functions
// **** Output of Non-primitive datatypes are objects
/*
// Array example 
const heroes = ["Shaktiman","Krish","Hero"]
console.log(typeof heroes) //Output => Object
*/ 

/*
//Object's example
let myObj = {
    name : "Swarnava",
    age : 23
}
console.log(typeof myObj) // Output => Object
*/

const myFunction = function(){
    console.log("Hello Swarnava")
}
console.log(typeof myFunction) // Output => Function (but is actually function object)

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they 
// hold at runtime and can change throughout the program as we assign different values to them.


