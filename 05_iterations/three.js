// for of loop

const arr = [1,2,3,45,564,654]

for (const num of arr) {
    // console.log(num );
    
}

const greetings = "heloWord";
for (const greet of greetings) {
    // console.log(greet);
    
}

// maps 

const map = new Map();

map.set('PK', "Pakistan");
map.set('USA', "United States Of America");
map.set('UK', "Canada");
map.set('Riyal', "Saudi");

// console.log(map);
for (const [key,value] of map) {
    // console.log(`${key} :- ${value}`);
    
}

const myObj = {
    username: "asad",
    id: 123,
    location: "pakistan"
}

// for (const [key,value] of myObj) {
//     console.log(key,value);
    
// }