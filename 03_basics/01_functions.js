

function sayHI(){
    console.log("i");
console.log("i");
console.log("i");
console.log("i");
console.log("i");
}

// sayHI()

// function addTwoNums(num1,num2) {

// console.log(num1+num2);


// }

// addTwoNums(4,6)

function loginUser (username) {
    if(username === undefined){
        console.log("Please enter Your name");
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUser("Asad"));
 
// multiple arguments using rest operator 

function shopingCart(...num) {
return num
}

// console.log(shopingCart(12,14,34,25));

const handleObject1 = {
    username: "ASad",
    price: 123.
}

function HandleObject(getObject){
return `Your name is ${getObject.username} and the price is ${getObject.price}`
}

// console.log(handleObject1(handleObject1));

// console.log(HandleObject({
//     username: "Asadullah Khan",
//     price: 132
// }));


const arr = [13,42,41,53]

function getArrValue(arrValue){
    return arrValue[3]
}
console.log(getArrValue(arr));
