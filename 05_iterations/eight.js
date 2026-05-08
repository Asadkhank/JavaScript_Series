// Reduce Methods 

// const arr = [1,2,3,65,765,6]

//  const initValue = 0;
//  const sumWithInit = arr.reduce((acc,cv)=> {
//     console.log(`acc value ${acc} and cv value is ${cv} `);
    
//     return acc + cv},initValue)
//  console.log(sumWithInit);
  
// const arr = [1, 2, 3, 4];

// const initValue = 0;

// const sumWithInit = arr.reduce((acc, cv) => {
//   console.log(`acc value ${acc} and cv value is ${cv}`);
//   return acc + cv;
// }, initValue);

// console.log(sumWithInit);

const cart = [
  {
    item: "Laptop",
    price: 80000,
    quantity: 1
  },
  {
    item: "Mouse",
    price: 1500,
    quantity: 2
  },
  {
    item: "Keyboard",
    price: 3000,
    quantity: 1
  },
  {
    item: "Headphones",
    price: 5000,
    quantity: 2
  }
];

const PriceCal = cart.reduce((acc, item)=>(acc + item.price),0)
console.log(PriceCal);
