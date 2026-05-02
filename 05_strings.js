const name = "Asad"
const repoCount = 50

console.log(name + " " + repoCount)

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("AsadKhan")
console.log(gameName + " " +gameName.length );
console.log(gameName.charAt(2));
console.log(gameName.indexOf("d"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "  KhanLala    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://asad.com/asad%20khan";
console.log(url.replace('%20','_'));

console.log(url.includes('AK'));


console.log(" hey Samia ");
