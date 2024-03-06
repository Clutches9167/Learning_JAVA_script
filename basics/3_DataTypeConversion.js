// let score = 69
// let score = '234' // number after Conversion

// let score = '234abc' // NaN ( ( Not a Number ) after Conversion
// let score = null // 0 after number  Conversion
// let score = undefined // NaN after Conversion
// let score = true // 1 after number  Conversion
let score = false // 0 after number  Conversion

// console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


let loggedIn = ""  // 0 -> false,  1-> true, ""-> false ( bcz 0 string hai ), "Ansh" -> true . " " -> true (kyu ki space count hoga )
let booleanConverison = Boolean(loggedIn)
console.log(booleanConverison);

let someNumber = 69
let stringConverison = String(someNumber)
console.log(stringConverison);
console.log(typeof stringConverison); // number to string coverted