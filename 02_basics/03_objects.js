// singleton

// object literals 

const mySymbol = Symbol ("key1")

const JsUser = {
    name: "Asad",
    "full Name": "Asadullah Khan",
    [mySymbol]: "myKey1",
    age: 24,
    location: "Almas",
    email: "asad@gmail.com",
    isLoggedIn: false,

};

// console.log(JsUser.name);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySymbol]);

JsUser.email = "khan@gmail.com";
// console.log(JsUser);

// Object.freeze(JsUser);
JsUser.email = "lala@gmail.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
    console.log(`Hi ${this.name} how are you doing`);
    
}
console.log(JsUser.greetingTwo());
console.log(JsUser);
