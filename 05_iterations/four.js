const myObj = {
    'js':"JavaScript",
    'py':"Python",
    "oop":"Object Orinted Programing",
    'swipt':"swift by apple"
}

for (const key in myObj) {
    if (!Object.hasOwn(myObj, key)) continue;
    
    const element = myObj[key]  
    // console.log(myObj[key]);
    
}


const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(programming[key]); 
}

const map = new Map();

map.set('PK', "Pakistan");
map.set('USA', "United States Of America");
map.set('UK', "Canada");
map.set('Riyal', "Saudi");

for (const key in map) {
    // console.log(map[key]);   
}

// map is not iteratable thats why its not working 