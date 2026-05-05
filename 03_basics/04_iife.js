// Immediately invoked function expressions (IIFE) 

// Named IIFE 
(function addTwo(){
    console.log("ASAd")
})();


// Simple IIFE 
( ()=> {
    console.log("Lala qalander");
    
})();

((num1,num2)=>{
    console.log(num1+num2);
    
})(5,4);