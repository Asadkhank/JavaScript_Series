const user = {
    username: "Asadullah",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
    
}

// user.welcomeMessage()
// user.username = "lala";
// user.welcomeMessage()
// console.log(user);

// console.log(this);


// function addTwo(num1,num2){
//     return num1 + num2
// }
// console.log(addTwo(8,5));

const addTwo = (num1, num2)=> (num1+num2)
console.log(addTwo(8,5));