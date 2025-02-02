// methods = fn => return something
// 1. forEach() -> array method -> accepts a cb fn -> in that cb it has 2 arguments -> item , index  
// -> doesnot returns anything

// let arr = [10,20,30,40,50];

// let returnedVal = arr.forEach( function(item,index){
//     console.log(item + index);
//     // return "sam"    //makes no sense
// } )

// console.log(returnedVal); //undefined

// ----------------------------------


// print double values of the array (not return)
// let arr = [2,4,6,8,10]    //[4,8,12,16,20]

// arr.forEach( function(item , index){
//     console.log(item*2);
// } )

// ----------------------------------
// direct question always asked

// 2. map() -> array method -> accepts a cb fn -> in that cb it has 2 arguments -> item , index  
//  -> returns a new array => the length of old array and new array will always be same

// let arr = [2,4,6,8,10] // 5

// let newArray = arr.map( function(item,index){
//     return item*item
// } )

// console.log(arr);      //5
// console.log(newArray); //5

// -------------------------------------------------------------

// 3. filter() -> array method -> accepts a cb fn -> in that cb it has 2 arguments -> item , index  
//  -> returns a new array => the length of old array and new array are not compulsary to be same
// -> only returns the truthy value (true in nature)

// let arr = [2,4,6,9,10]

// let newArray = arr.filter( function(item , index){
//     if(item % 2 === 0){
//         return true
//     }
// } )


// let newArray = arr.filter( function(item , index){
//     if(item % 2 !== 0){
//         return true
//     }
// } )
// console.log(arr);
// console.log(newArray);


// ---------------------------------------------------

// Write a JavaScript function that takes an array of numbers 
// and returns a new array with only the even numbers.

// let arr = [10,20,30,40,5,7,9,10];

// function mav(arr){
//     let newArray = arr.filter( function(item , index){
//        if(item%2 === 0){
//         return true
//        }
//     } )
//     return newArray
// }

// console.log( mav(arr) );

// -----------------------------------------

// Write a function that takes an array of numbers, doubles each value, 
// and then filters out the values greater than 10.

// let arr = [10,20,30,40,5,7,9,10];


// function samarth(arr){
//     let newArr = arr.map(function(item , index){
//         return item*2;
//     })
//     let newFilArr = newArr.filter(function(item , index){
//         if(item>10){
//             return true
//         }
//     })

//     return newFilArr;
// }

// console.log( samarth(arr) );


// ----------------------------------
// some() -> array method -> accepts a cb fn -> in that cb it has 2 arguments -> item , index  
//  -> returns only boolean value => if anyone amongst them satisfies the situation

// let arr = [10,20,30,40,50,60];

// let returnVal = arr.some(function(item , index){
//     if(item%11 === 0){
//         return true
//     }
// })

// console.log(returnVal);

// ----------------------------------
// every() -> array method -> accepts a cb fn -> in that cb it has 2 arguments -> item , index  
//  -> returns only boolean value => if each of them satisfies the situation

// let arr2 = [10,20,30,40,55,60];

// let returnVal2 = arr2.every( function(item , index){
//     if(item%10 === 0){
//         return true
//     }
// } )
// console.log(returnVal2);

// ----------------------------------

// some of all the elements in the array

// let arr = [10,23,1241,25,125,25];
// let initialVal = 0;
// // arr.reduce( function(totalVal , currVal){
// let returnedVal = arr.reduce( function(acc , curr){
//     return acc = acc + curr
// }, initialVal)


// console.log(returnedVal);


