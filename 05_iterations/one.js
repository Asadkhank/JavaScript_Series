// for loop 
//  for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
//  }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table for ${i}`);
    
//     for (let j = 0; j <=10 ; j++) {
//         console.log(`${i} * ${j} = ${i * j}`); 

//     }
    
// }

// const array = ["asad","khan", "lala"]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(array[index]);
    
// }

// for (let i = 0; i < 10; i++) {
//     let row = "";
//     for (let j = 0; j < 10 -i; j++) {
//        row += j
      
//     }
//     console.log(row)
// }


for (let i = 0; i < 10; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
       row += j
      
    }
    console.log(row)
}