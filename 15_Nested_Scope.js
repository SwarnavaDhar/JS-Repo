/*
function one(){
    const username = "Swarnava Dhar"

    function two(){
        const website = "twitter"
        console.log(username)
    }
    // console.log(website) // It will show error as its out of scope
    two() // Output => will give the username in the function two, i.e => Swarnava Dhar
}
one()
*/

/*
if (true){
    const username = "Bhawarna Kumar"
    if(username === "Bhawarna Kumar"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)
*/

// console.log(addOne(5))
function addOne(num){
    return num + 1
}

console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}

