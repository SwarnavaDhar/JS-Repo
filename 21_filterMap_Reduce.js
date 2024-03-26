/*
const myNums = [1,2,3,4,5,6,7]
const morethan4 = myNums.filter((num) => num > 4)
console.log(morethan4) // Output => [5,6,7]
*/

/*
// Using filter
const myNums = [1,2,3,4,5,6,7]
const morethan4 = myNums.filter( (num) => {
    return num > 4
})
console.log(morethan4) // It will return empty array, as it is in the scope.
*/

/*
// so we have to use 'return' statement to get the values
const myNums = [1,2,3,4,5,6,7]
const morethan4 = myNums.filter( (num) => {
    return num > 4
})
// console.log(morethan4) 
*/

/*
// Above example using for each array
const newNums = []

myNums.forEach(num => {
    if (num > 4){
        newNums.push(num)
    }
});
console.log(newNums)
*/

/*
const books = [
    { title : 'Book 165', genre : 'Fiction', publish : 1981, edition : 2004},
    { title : 'Book 154', genre : 'Fiction', publish : 1981, edition : 2004},
    { title : 'Book 147', genre : 'History', publish : 1985, edition : 2008},
    { title : 'Book 193', genre : 'English', publish : 1986, edition : 2006},
    { title : 'Book 158', genre : 'Science', publish : 1988, edition : 2010},
] 
const userBooks = books.filter( (book) => book.genre === 'Fiction');
// console.log(userBooks)

const userBook = books.filter ( (book) => {
    return book.edition > 2006 && book.title === 'Book 158' // using mutiple filters
})
console.log(userBook);
*/

// Adding 10 with each numbers
/*
const myNums = [1,2,3,4,5,6,7]
const newNums = myNums.map ( (num) => {
    return num + 10
})
console.log(newNums)
*/

/*
// chaining method -> We can chain multiple array methods together to perform operations on arrays.
const newNum = myNums  
                .map ((num) =>  (num * 10)) // first it will multiply the numbers
                .map ((num) =>  (num + 1)) // then it will add 1 on top of that numbers
                .filter ((num) => (num > 40)) // then it will pick the nums > 40
console.log(newNum)
*/

// Reduce js
// Accumulator values adds up, after each value --> 0 -> 0+1=1 -> 1+2=3 -> 3+3=6 and so on.
const myNums = [1,2,3,4,5]
const total = myNums.reduce(function (accumulator , currentVal) {
    // console.log(`accumulator: ${accumulator} and Current Value: ${currentVal}`) // checking the accumulator and currentValue
    return accumulator + currentVal
},0) // 0 is the accumulator's starting point

// console.log(total) // Output --> 15

// Reduce js using Arrow Function
const myTotal = myNums.reduce( (accumulator, currentVal) => (accumulator + currentVal) ,0 )
//console.log(myTotal)

const shoppingCart = [
    {
        itemName : "Mobile",
        price : 29999
    },
    {
        itemName : "Ipad",
        price : 49999
    },
    {
        itemName : "Laptop",
        price : 69999
    }
]
const totalPay = shoppingCart.reduce( (acc, item) => acc + item.price , 0)
                .toLocaleString("en-IN")
console.log(totalPay)