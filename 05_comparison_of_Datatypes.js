// console.log("2" > 1) // Comparing two different datatype, Output => true
// console.log("02" == 2) // Output => true

/*
//Writing this kind of code is not a good practice

// console.log(null > 0); // Output => false
// console.log(null == 0); // Output => false
// console.log(null >= 0); // In JS null value is convereted to 0, so, Output => true

// console.log(undefined > 0); 
// console.log(undefined == 0);  
// console.log(undefined >= 0);  
// In all three cases Output will be 0
*/

// == and === works differently in JS compared to comparsion opeartors (>,>=,<,<=)

// === --> Strict check
// console.log("2" === 2) // Output => false (=== is checking, whether the comparsions are between same datatype or not)
// console.log("2" === "2") // Output => true (as their datatypes are similar)