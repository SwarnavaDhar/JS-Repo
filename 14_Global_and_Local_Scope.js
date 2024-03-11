// Global Scope
/*
let a = 10
const b = 20
var c = 30
console.log(a,b,c)
*/

// Block Scope
/*
if(true){
    let a = 10
    const b = 20
    var c = 30
}
// *** NOTE - This two will only work within the scope
// console.log(a) // Output => Not defined
// console.log(b) // Output => Not defined

*** NOTE -  var = 30 will work outside the scope, which a a very bad practice
console.log(c) // Output => 30 ,
*/