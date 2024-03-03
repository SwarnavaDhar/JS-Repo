// ****All primitve datatypes uses stack memory.
// Stack memory basically creates the copy of the variable and all the changes were made in the copy, will not reflect in the original version so the original remains same

// let name = "Swarnava"
// console.log(name)

// let anothername = name // Storing the "name" variable into a new variable called "anothername"
// anothername = "bantu" // Assigning a new value 

// console.log(name) // Output => Swarnava (Original value) 
// console.log(anothername) //Output => bantu (Assigned Value)


// ****All Non-Primitive datatype uses heap memory
// Heap memory basically refers to the address of the variable, as it does not create any copy, so if any changes are made will reflect.
// As we are basically changing the address itself 

// let userOne = {
//     email: "xyz@gmail.com",
//     id : "123xyz"
// }

// let userTwo = userOne

// userTwo.email = "abc@gmail.com" // accessing email using .operator, changing the email

// both will show the similar output as the email has changed for both userOne and userTwo.
// console.log(userOne.email) 
// console.log(userTwo.email)