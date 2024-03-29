// Declaring array
// const num = [0,1,0,1,3]
// const heroes = ["Iron-man","Batman"]

// Another way of declaring array
// const myArr = new Array(1,2,3,4)
// console.log(myArr[1]) // Acessing the 2nd element of the array 

//Array Methods
// myArr.push(6,7,8,9) // pushing multiple values in the array
// myArr.push(10) // pushing single value in the array
// myArr.pop() //Removes the last value 
// myArr.unshift(10) // Adds a new value at the start of the array
// myArr.shift() // Removes the unshift value
// console.log(myArr)
// console.log(myArr.includes(9)) // Output => false, as 9 does not exist in the array
// console.log(myArr.indexOf(9)) // Output => -1

// const newArr = myArr.join()
// console.log(myArr) // Output will be in array
// console.log(newArr) // Output will be in string format
// console.log(typeof newArr)

//Slice --> Basically creates a copy of the and slices it
// const arr1 = [10,20,30,40,50,60]
// console.log("Original Array: ", arr1)
// console.log(typeof arr1) 
// console.log("Sliced Array: " , arr1.slice(0,3)) // includes the start index and excludes the last index , Output => [10,20,30]

// console.log("*************************************************************************************************************")

//  Splice --> Manipulates the original array
// console.log("Original Array: ", arr1)
// console.log("Spliced array: ", arr1.splice(0,2)) 
// console.log("After splicing original array: ",arr1)

// console.log("***********************************************Array Part 2**************************************************************")

const marvel = ["Thor","Iron-Man","Spiderman"]
const dc = ["Batman","Superman","Flash"]
// marvel.push(dc) // It takes every element of marvel array as a single element and takes the dc array as a one whole element
// console.log(marvel)

// const allHero = marvel.concat(dc) // concats both the arrays into a single array and retruns a new array
// console.log(allHero)

// const AllHeroes = [...marvel, ...dc] // (... => Spread Operator, concats both the arrays into a single array and retruns a new array)
// console.log(AllHeroes)

const numArray = [1,2,3,[4,5],6,[7,[8,9,10]]]
const flatArray = numArray.flat(2) // flat basically flatens all arrays of array into a new single array with each element coma separated and we can also add depth within brackets (like ---> 0,1,2) OR we can write "Infinite" to flatens every arrays of array // Eg - [1,2,3,[4,5],6,[7,[8,9,10]]] --> It has depth 2, because it has array in the array, in the another array.
// console.log(flatArray)

// isArray =>checks whether the passed value is in the Array or not and based on that returns a boolean value.
// console.log(Array.isArray("Hitesh")) // Output => false
// console.log(Array.isArray(["Swarnava"])) // Output => true, as "Swarnava" is in third bracket means array

// console.log(Array.from("Swarnava")) // Turns every single alphabet, a single element into an array

// console.log(Array.from({name: "Swarnava"})) // It will return an empty array

let score = [100,200,300]
let score1 = [400,500,600]
let score2 = [700,800,900]
console.log(Array.of(score,score1,score2)) // It will return an array which will conatain three array















