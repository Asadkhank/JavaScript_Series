// while loop
// let i =0;
// while ( i <= 10) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// while (i<10) {
//     let j = 0;
//     let row = ""
//     while (j < 10 - i) {
//         row += "* ";
//         j++
//     }
//     console.log(row);
//     i++
    
// }


// do while Loop 

let i = 0;
do {
    let j = 0;
    let row = ""
    do {
        row += " * ";
        j++
    } while (j < i);
    console.log(row);
    i++
    
} while (i < 10);