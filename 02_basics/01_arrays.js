// Array

const myArr = [,4,3,6,7,5,6,3,6,];
// console.log(myArr);

myArr.push(6)
// console.log(myArr);

myArr.pop()
// console.log(myArr);

// myArr.unshift(5)
// console.log(myArr);

myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(5));


// slice and splice

console.log('A', myArr);
// const myArr1 = myArr.join()
// console.log(typeof myArr1);

const myArr1 = myArr.slice(0,3);
console.log("B",myArr1);
console.log(myArr);


const myArr2 = myArr.splice(0,3);
console.log("C",myArr2);
console.log(myArr);
