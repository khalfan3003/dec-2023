
// console.log("open a shop");
// console.log("work there for 5 mins");
// console.log("close the shop");

// -------------------------------------

// wait/delay

// setTimeout
// setTimeout( function(){} , 5000 )

// console.log("open a shop");

// setTimeout( function(){
//     console.log("work there for 5 secs")
// } , 5000 )

// console.log("close the shop");


// ---------------
// setInterval
// setInterval( function(){} , 5000 )



// // -------------------------------------------------------



// console.log("hello from sam");

// setTimeout(function(){
//     console.log("hi from 6s");
// } , 6000)

// setTimeout(function(){
//     console.log("hi from 3s");
// } , 3000)

// console.log("hello from sam 2");


// // total time kitna ? 6
// // overall output

// // -------------------------------------------------------



// console.log("hello from sam");

// setTimeout(function(){
//     console.log("hi from 3s-1");
// } , 3000)

// setTimeout(function(){
//     console.log("hi from 3s-2");
// } , 3000)

// console.log("hello from sam 2");


// // total time kitna ? 
// // overall output



// -------------------------------------------------------



// console.log("welcome to amazon");

// setTimeout(function(){
//     console.log("hi from 0s");
// } , 0)

// console.log("good bye from amazon");


// total time kitna ? 
// overall output

// -------------------------------------------------------

// let id1 = setTimeout(function(){
//     console.log("hello");
// } , 4000)

// let id2 = setInterval(function(){
//     console.log("hi bhai");
// } , 3000)

// clearTimeout(id1)
// clearInterval(id2) //stops it

// console.log(id1);
// console.log(id2);


// -------------------------------------------------------

let iddd = setInterval(function(){
    console.log("hi bhai");
} , 1000)


setTimeout(function(){
    clearInterval(iddd)
} , 20000)

// ------------------


// let iddd = setInterval(function(){
//     console.log("hi bhai");
// } , 2000)


// console.log(iddd);


