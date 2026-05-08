// const coding = ["js","rb","py","java","cpp"]

// coding.forEach( (val, index, arr) => {
//     console.log(val, index, arr);  
// } )

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
     {
        languageName: "python",
        languageFileName:"py"
    },
]

myCoding.forEach((item) =>{
    // console.log(item.languageFileName, item.languageName);
    
})

// It shows undefined 

// const coding = ["js","rb","python","java","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);


// const myNums = [1,2,3,45,56,76,7,8,87]
// let newNums = myNums.filter((num)=> num > 4 )
// console.log(newNums);

const books = [
  {
    book: "JavaScript Basics",
    genre: "Programming",
    edition: 1
  },
  {
    book: "CSS Mastery",
    genre: "Design",
    edition: 4
  },
  {
    book: "React Guide",
    genre: "Frontend",
    edition: 3
  },
  {
    book: "Node.js Handbook",
    genre: "Backend",
    edition: 1
  }
];

// let userBooks = books.filter((bk) => bk.genre == "Frontend");
let userBooks = books.filter((bk)=> bk.edition >= 1 && bk.genre == "Design")
console.log(userBooks);
