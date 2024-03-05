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
const arr1 = [10,20,30,40,50,60]
console.log("Original Array: ", arr1)
console.log(typeof arr1) 
console.log("Sliced Array: " , arr1.slice(0,3)) // includes the start index and excludes the last index , Output => [10,20,30]

console.log("*************************************************************************************************************")

//  Splice --> Manipulates the original array
console.log("Original Array: ", arr1)
console.log("Spliced array: ", arr1.splice(0,2)) 
console.log("After splicing original array: ",arr1)




