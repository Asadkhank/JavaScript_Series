 let mydate = new Date();
//  console.log(mydate.toDateString());
//  console.log(mydate.toISOString());
//  console.log(mydate.toLocaleDateString());

//  let createDate = new Date (2023,0,4);
//  let createDate = new Date (2023,0,4,7,5);
let createDate = new Date ("2024-03-28");
//  console.log(createDate.toString());
 
 let myTimeStamp = Date.now()
//  console.log(myTimeStamp);
//  console.log(Math.floor(Date.now()/1000));
 
 let newDate = new Date();
 console.log(newDate.toString());
  console.log(newDate.getDate());
 
  console.log(newDate.toLocaleString('dafualt',{
    weekday: "short",
 
  }));
  