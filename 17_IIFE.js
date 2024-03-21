// IIFE -> Immediately Invoked Function Expressions

/*
function coffee(){
    console.log(`DB CONNECTED`)
} () // -> parenthesis after curly brcaes will give error, so we have to put the whole function in the parenthesis

coffee() // function calling
*/

// The above function can be written in this way
(function coffee(){ // named IIFE
    console.log(`DB CONNECTED`)
}) (); // -> Now we have used parenthesis after wrapping the function in parenthesis, it will work

// ('function defintion') and ('function execution')

// The above code using arrow function, it will not work if we do not use the semicolon after first function
(() => { // Normal IIFE
    console.log('db connected')
}) ();

// IIFE with parameters
( (name) => {// Here name is the argument
    console.log(`DB connected ${name}`)
}) ('Swarnava') // here is the parameter