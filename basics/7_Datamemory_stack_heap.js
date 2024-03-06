//  STACK ( Primitive )  and    HEAP ( NON - Primitive / Reference by)
//..  Copy de diya jata hai  .. exact reference de diya jata hai 


//   STACK  
let myemail = " ansh.google.com"
let newEmail = myemail
newEmail = "ansh.youtube.com"

console.log(newEmail); 
console.log(myemail);  // Real value does not change kyu ki ek copy diya tha ( Stack of dish )

//  HEAP
let emp ={ 
    name: " Aniket" ,
    age: 26
}

let usr = emp
usr.age ='24'

console.log(usr); 
console.log(emp); // real value also changed  kyu ki exact efernce diya tha memory/Data  ka  ( ek data ko bade box main rakh diya ho )