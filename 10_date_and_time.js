// Dates
let myDate = new Date()
// console.log(myDate) // Output => 2024-03-04T14:19:35.653Z
// console.log(myDate .toString()); // Output => Mon Mar 04 2024 19:59:47 GMT+0530 (India Standard Time) --> Shows Day, month, date year and current time
// console.log(myDate .toDateString()) // Output => Mon Mar 04 2024 --> Shows current Day, month, date and year
// console.log(myDate .toLocaleString()) // Output => 4/3/2024, 8:04:44 pm --> Shows current date and time
// console.log(myDate .toLocaleDateString()) // Output => 4/3/2024 --> Shows current date
// console.log(myDate .toLocaleTimeString()) // Output => 8:09:48 pm --> Shows current time
// console.log(typeof myDate) // Output => object (Date is object type variable)

// let anotherDate = new Date(2023,0,23) // 2023 --> Year, 0 --> Jan, 23 --> Day (Monday)
// console.log(anotherDate) // Output => 2023-01-22T18:30:00.000Z
// console.log(anotherDate .toString()) // Output => Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)

// let NewDate = new Date("2024-02-14") // If we want to print our date in "yy-mm-dd" format 
// let NewDate = new Date("01-10-2024") // "dd-mm-yy" format
// console.log(NewDate .toLocaleString()) // Output => 14/2/2024, 5:30:00 am

// let TimeStamp = Date.now() 
// console.log(Math.round(Date.now()/1000)) // Converting the milliseconds into seconds
// console.log(TimeStamp) // It will output the current timestamp in milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).

// let NewDate = new Date("2024-04-03") 
// console.log(NewDate .getTime()) // --> "YY-DD-MM" => We are converting timestamp in milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC), to compare.

// console.log(myDate .getDay()) // Ouptut => 1 --> Monday
// console.log(myDate .getDate()) // Output => 5 --> 5th March
// console.log(myDate .getFullYear()) // Output => 2024
// console.log(myDate .getHours()) // Output => 13 --> current hour
// console.log(myDate .getMinutes()) // Output => 24 --> current minute
// console.log(myDate .getSeconds()) // Output -> current seconds

// console.log(`${myDate.getMonth() + 1}`); // month index returned by getMonth(), January is represented by 0, so we are adding 1, to start 

console.log(myDate.toLocaleString('default',{
    weekday: "short" // Output =>  current day (Tuesday) --> "Tue" (short)
    // weekday: "long" // Output =>  current day (Tuesday) --> "Tuesday" (long)
    // weekday:"narrow" // Output =>  current day (Tuesday) --> "T" (narrow)
}))


