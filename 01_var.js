const accountId = 14453
let accountEmail = "xyz@gmail.com"
var accountPassword = "12345" // prefer not to use var, because of issue in block scope and functional scope
accountCity = "Jaipur" //Another way of declaring variable, but not a good practice
let accountState;

// accountId = 2 // not allowed
accountEmail = "abc@gmail.com"
accountPassword = "345"
accountCity = "Kolkata"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.log([accountId,accountEmail,accountPassword,accountCity,accountState])