
// false values 
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN,

// Truthy Values 
// "0","false", "", [], {}, function(){} 

const userEmail = []
if (userEmail.length === 0 ) {
    console.log("array is empty");
    
}

const object = {user: "Asad", age: 123}

if (Object.keys(object).length === 0) {
    console.log("object is empty");
    
}else {
    console.log("object is not empty");
    console.log(object)
}

// Nullish coaliscing operator (??): null undefined 

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);

// Ternory Operator 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");

