// for of 
/*
const myArr = ["Superman", "Batman" , "Flash"]
for (const values of myArr){
    // console.log(values)
}
*/

/*
const greetings = "Hello World";
for (const value of greetings) {
    if (value == ' ') { // founds space, breaks the loops
        break;
    }
    console.log(value);
}
*/

// Maps --> Map is function in js, it stores only unique values and it is not iterable
/*
const map = new Map()
map.set('State1', 'West Bengal')
map.set('State2', 'Gujrat')
console.log(map);
*/

/*
// using for of loop in map
for (const key of map){
    console.log(key) // prints the whole thing in array format
}
*/

/*
// If we want keys and values
for (const [key,value] of map){
    console.log(key,':-',value)
}
*/

/*
// iterating object using for in loop

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

/*
// for printing the keys
for(const key in myObject){
    // console.log(key)
}

// for values
for(const values in myObject){
    // console.log(myObject[values])
}

// for both keys and values
for (const key in myObject) {
    // console.log(`${key} is ${myObject[key]}`)
}
*/


// Note :- for in loop does not print array directly but their keys 
// Lets understand it by example


// const languages = ["js","cpp","java","python"]

for(const key in languages){
    // console.log(key) // Output --> 0,1,2,3
}

/*
// To print the values using for in loop, here's the syntax
for(const key in languages){
    // console.log(languages[key]) // Output --> js, cpp, java, python
}
*/

/*
// printing values using for each loop
languages.forEach( function (item) {
    // console.log(item) // Output --> js, cpp, java, python
} )
*/

/*
// printing values using arrow function
languages.forEach( (item) => {
    // console.log(item)
})
*/

/*
// as a vague function
function printMe(item){
    // console.log(item);
}
languages.forEach(printMe)

languages.forEach((item, index, arr) => {
    // console.log(item, index, arr) // It ptints the keys along with index number and the whole array
})
*/

/*
// Taking an array and taking objects in the array
const coding = [
    {
        CompanyName: "TATA",
    },
    {
        CompanyName: "HYUNDAI",
    },
    {
        CompanyName: "MARUTI",
    },
    {
        CompanyName: "KIA",
    },
]
coding.forEach( (item) => {
    console.log(item) // It will print the whole objects present in the array
    console.log(item.CompanyName) // By this we can access company names
})
*/