let a = 2 + 2
console.log(a);   // 4 

let str1 = "Sexy"
let str2 = " Ansh"

let str3 = str1 + str2;
console.log(str3);  // Sexy Ansh

console.log( 2 + 4 );
console.log( 2 * 4 );
console.log( 2 / 4 );
console.log( 2 - 4 );
console.log( 2 % 4 );


console.log( 2 + 4 );        // 6
console.log( "2" + 4 );      // 24
console.log( 2 + "4" );      // 24
console.log( "2" + 4 + 5 );  // 245
console.log( 2 + 4 + "5" );  // 65
console.log( 2 + "4" + 5 );  // 245


console.log( 3 + 4 * 5 % 3  ); // Never Ever write like thiss CODE
console.log( (3 + 4) * ( 5 % 3 ) ); // ALWAYS  write like this 


// NEVER  EVER do this Type of Conversion 
console.log(true);       //true
console.log(+true);      // 1 
// console.log(true+);   // error
console.log(+"");        //0          

// Never Do this type of Fussy logic write in good ways
// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2

let gameCounter = 10
// gameCounter++;
++gameCounter;
console.log(gameCounter);  // 101 for both cases see below WHY ++x , x++ difference 



//  post and  prefix fix operators
let c = 3;
const d = c++;
console.log(`c:${c}, d:${d}`);
// Expected output: "c:4, d:3"

let m = 3;
const n = ++m;
console.log(`m:${m}, n:${n}`);
// Expected output: "m:4, n:4"


// //  PREFIX operaot
// let x = 3;
// const y = ++x;
// // x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// // x2 is 4n; y2 is 4n

// // POSTFIX operator

// let x = 3;
// const y = x++;
// // x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// // x2 is 4n; y2 is 3n