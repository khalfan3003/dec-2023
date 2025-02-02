// function sam(){

// }

// console.log( sam() ); //undefined

// -------------------------------

// function sam(){

// }

// console.log( sam() );     //undefined
// console.log( new sam() ); //object


// -----------------------------
// good practice //not compulsary ❌

// function Sam(){

// }

// console.log( new Sam() ); 


// -----------------------------

// let shoes = {
//     shoes : "nike",
// }


//this points to the newly created object in constructor fn

// function Sam(brand , color , num , boole){
//     this.shoes = brand
//     this.color = color
//     this.number = num
//     this.isWarrenty = boole
// }

// let p1 = new Sam("NIKE" , "BLUE" , 10 , true);
// console.log(p1);

// let p2 = new Sam("PUMA" , "RED" , 8 , false);
// console.log(p2);



// ----------------------------------

let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']; 

let count = fruits.reduce(function(acc, curr) { 
    acc[curr] = (acc[curr] || 0) + 1; 
    return acc; 
}, {}); 
console.log(count);




