// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "asad";
tinderUser.isLoggedIn = false;
//  console.log(tinderUser);
 

 const newTinderUser = {
    name: 'Asad',
    books: {
        1:"islamiat",
        2: "Physics",

    }
 }

 console.log(Object.keys(tinderUser));
 
//  console.log(newTinderUser);
 newTinderUser.books[3] = "chem";
//  console.log(newTinderUser);
 
const obj1 = {1:"a",2:"c",};
const obj2 = {3:"a",4:"c",};

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {
        id: "123abc",
        email: "khanlala@gmail.com"
    },
    {
        id: "123abc",
        email: "khanlala@gmail.com"
    },
    {
        id: "123abc",
        email: "khanlala@gmail.com"
    },
    {
        id: "123abc",
        email: "khanlala@gmail.com"
    }
]

console.log(user);
user[1].name = "Asad";
console.log(user);