
// forEach()
// try it yourself,  next class
// map()
// filter()
// reduce()
// find()
// every()
// some()



// ----------------------------------

// forEach() -> works like a loop -> only works on arrays -> returns nothing(undefined)
// -> accepts a cb fn, so it is  hof -> which 2 arguments

// let ab = {

//     a: function b(){
        
//     }
// }
// arr.forEach( function b(){} )

// ----------

// let arr = [100,200,300,400,500];

// let returnedVal = arr.forEach( function(item, index){
//     console.log(item);
//     console.log(index);
//     // return 10 //no sense it returns nothing
// } )

// console.log(returnedVal);

// --------

let arr = [100,200,300,400,500];

let ret = arr.forEach( function(itm , indx){
    console.log(itm);
    console.log(indx);    
    return "asammakjajhd"
} )

console.log(ret);








