const marvel_heros = ['thor','ironman','spiderman'];
const dc = ['superman','flash','batman'];

// marvel_heros.push(dc)
// console.log(marvel_heros[3][2]);

// marvel_heros.concat(dc)
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc];
// console.log(all_new_heros);

const another_arr = [0,3,4,2,[2,5,63,3],[2,7,4,76,[6,4,36,7]]];
// console.log(another_arr);

const new_another_arr = another_arr.flat(Infinity);
// console.log(new_another_arr);

// console.log(Array.isArray("Asad"));
// console.log(Array.from("Asad"));
// console.log(Array.from({name : "Asad"}));

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));

