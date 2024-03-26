// ------------------------------------------------------------------------------- FOR LOOP ------------------------------------------------------------------------------------
/*
for (let index = 0; index <= 10; index++) {
    const element = index
    if (element == 5){
        console.log("H A L F")
    }
    console.log(index)
}
*/

/*
for (let i = 0; i < 3; i++){
    console.log(`++Outer loop++ ${i}`)
    for(let j = 0; j < 5; j++){
        console.log(`--Inner loop-- ${j}`)
    }
}
*/

// break
/*
for (let i = 1; i < 20; i++){
    console.log(`value of ${i}`)
    if(i == 5){
        console.log(`${i} detected`)
        break
    }
}
*/

// continue
/*
for (let i = 1; i < 10; i++){
    if(i == 5){
        console.log(`${i} detected`)
        continue
    }
    console.log(`value of ${i}`)
}
*/

// ------------------------------------------------------------------------------- WHILE LOOP ------------------------------------------------------------------------------------
let arr = 0
let myArray = ['flash','Aquaman','batman']
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`)
    arr = arr + 1
}

// ------------------------------------------------------------------------------- DO WHILE LOOP ------------------------------------------------------------------------------------
let score = 11
do{
    console.log(`Score is ${score}`)
    score++
}while(score > 12)