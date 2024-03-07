// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.6575595
// console.log(otherNumber.toPrecision(3));


// const hundered = 10000000000
// console.log(hundered.toLocaleString('en-IN'));

// console.log(Math);
// console.log(Math.abs(-4));

// console.log(Math.round(2.6));
// console.log(Math.round(2.5));

// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.max(3,4,5,6));


console.log(Math.random()); // it will give values between 0 - 1
console.log(Math.random()*10);  // 0.343 x 10 = 3.43
console.log((Math.random()*10) + 1);   // 1 ke upar value chahiye toh  0.034 x 10 = 0.34  + 1 = 1.34 
console.log(Math.floor(Math.random()*10) + 1);  // floor single lower value dega 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1 )) + min ) 

// // EXplanation 
// // Function to generate a random integer between min and max (inclusive)
// function getRandomInt(min, max) {
//   // Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive)
//   // Multiply by (max - min + 1) to get a range of values from 0 to (max - min)
//   // Math.floor() rounds down to the nearest integer
//   // Finally, add min to shift the range to [min, max]
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Example usage: generate a random integer between 1 and 10 (inclusive)
// const randomValue = getRandomInt(1, 10);
// console.log(randomValue);