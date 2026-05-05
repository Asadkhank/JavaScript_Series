
// if statement
// username = "Asad"
// const isUserLoggedIn = true
// if(isUserLoggedIn){
// console.log(`welcome ${username}`);
// }

// <, >, <=, >=, ==, !=, ===

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// const balance = 100
// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than");
    
// } else if (balance <750){
//     console.log("less than 750");
    
// }else if (balance <900){
//     console.log("less than 750");
    
// }
// else {
//     console.log("greate than ");
    
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow acces");
    
}

if (loggedInFromEmail || loggedInFromGoogle) {
   
    if (loggedInFromEmail) {
        console.log("Logged In From Email");
        
    }
    else if(loggedInFromGoogle){
        console.log("logged IN from Google");
        
    }
}