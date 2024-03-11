// Object Literals

// const user = {} // creating an empty object, Is a Singleton Object
// const user2 = new Object () // Another way of creating an object, It is non-singleton object

const mySym = Symbol("Key1")

//creating an object
const user = {
    name: "Swarnava",
    age: 23,
    [mySym] : "myKey1", // Write way of declaring symbol, symbol variable should be in 3rd bracket
    Location: "Kolkata",
    email: "sdk@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday","Saturday"] // declaring objects
}


//Now accessing the objects: 
// Type 1:
// console.log(user.age) // acces values using (.) operator [Not a good practice]

// Type 2:
// console.log(user["age"]) // Another way of accessing value 

// console.log(user[mySym]) //Acessing symbol variable

// console.log(user.email) // Print old email
// console.log(user.email = "sdk2000@gmail.com") // changing the existing email, sets and prints new email

// Object.freeze(user) // Here its freezing the email
// user.email = "sdhar@gmail.com" // Although we are trying to change the email value, it will no change as it's frozen
// console.log(user["email"]) // Will print the old mail

// console.log(user)

//function creation

// user.greeting = function(){
//     console.log("Hello Duniya") 
// }
// console.log(user.greeting()) // [Function (anonymous)]
// console.log(user.greeting()) // Output => Undefined

// user.greeting2 = function(){
//     console.log(`Hello ${this.name}, your age is ${this.age}`)
// }
// console.log(user.greeting2) // [Function (anonymous)]
// console.log(user.greeting2()) // Output => Hello Swarnava(as we are accessing name using "this"), your age is 23(as we are accessing age using "this")


// console.log("***********************************************Objects Part 2**************************************************************")

// creating objects of objects
const regularUser = {
    email: "sdk@gmail.com",
    name: {
        fullName: {
            firstName: "Swarnava",
            lastname: "Dhar",
        }
    },
    isLoggedIn: "false"
}
// console.log(regularUser)
// console.log(regularUser.name.fullName.firstName) // Accessing multiple levels of objects, Output => Swarnava

const obj1 = {1: "Ayan", 2: "Bantayan"} // key value pair, 1 --> key, "Ayan" --> value
const obj2 = {3: "Ayushi", 4: "Samiran"} 
const mergedObj = Object.assign(obj1, obj2) // for assigning object
// console.log(mergedObj)
const MergedObj = {...obj1, ...obj2} // Using Spread operator
// console.log(MergedObj)

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]
users[1].email
// console.log(Object.keys(regularUser)) // Output => [ 'email', 'name', 'isLoggedIn' ], prints the keys in an array
// console.log(Object.values(regularUser)) // prints the values in an array
// console.log(Object.entries(regularUser)) // Prints each key-value pair in a separate array
// console.log(regularUser.hasOwnProperty('isLoggedIn')) // checks whethet a property present or not and gives a bool value based on that


 

const course = {
    MyCourse: "JS",
    price: "999",
    instructor: "SD"
}
const{MyCourse: courseName} = course // Objects destructuring
console.log(courseName)

/*
API -> Application Programming Interface, a messenger who transfers data from one place to another

JSON -> Javascript Object Notation
declaring JSON, it is very similar to object declaration, but here keys are also string
{
    "MyCourse:" "JS",
    "price:" "999",
    "instructor:" "SD"
}
*/