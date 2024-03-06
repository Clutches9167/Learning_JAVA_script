// console.log( 2 > 1 );
// console.log( 2 = 1 );
// console.log( 2 < 1 );
// console.log( 2 != 1 );
// console.log( 2 == 1 );

// AVOID Writting the below CODE Comparision
 
//   Dont Compare  Different Data Types or use TYPE SCRIPT which dont allow you to do this things.
console.log( "2" > 1 );    // true
console.log( "02" > 1 );   // true

console.log( null > 0 );   // false
console.log( null < 0 );   // flase
console.log( null == 0 );  //false
console.log( null >= 0 );  // true  [ Reason is that an equality check == and comparisons > < >= <= work differently]
                                //  [ Comparisons Convert null to a number , treating it as 0. Thats why " null >= 0 " is true and " null !>  0 " is false. ]
console.log( null != 0 );   // true

console.log( undefined == 0 );   // false 
console.log( undefined > 0 );    // false
console.log( undefined < 0 );    // false

// === this is strict check  it will also check the DATA TYPE before comparing
console.log( "2" === 1 );  // false  