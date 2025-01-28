
// var a = 10;

// function vohra(){
//     let c = 40;
//     let d = 30;
//     function sam(){
//         console.log(c);
//     }
//     sam();
//     console.log(c);
// }
// vohra()

// console.log(a);

// --------------------------------------------


// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a); // 10 
// console.log(b); // 20
// console.log(c); // 30

// --------------------------------------------

// hoisting happening? ✅

// console.log(a); // undefined
// console.log(b); // tdz
// console.log(c); // tdz

// var a = 10;
// let b = 20;
// const c = 30;

// // --------------------------------------------

// var a = 10;
// let b = 20;
// const c = 30;

// if(true){
//     var d = 100; //global
//     let e = 200; //block
//     const f = 300; //block
// }

// console.log(d); // 100
// console.log(e); // err
// console.log(f); // 

// // --------------------------------------------

// var a = 10; //global
// let b = 20; //script
// const c = 30; //script

// if(true){
//     var a = 100; //global ✅
//     let b = 200;  // block ❌
//     const c = 300; // block ❌
// }

// console.log(a); // 100
// console.log(b); // 20
// console.log(c); // 30


// --------------------------------------------


// var a = 10; // global
// let b = 20; // script

// function sam(){
//     console.log(a);
//     var a = 200; // functional -> 200
//     let b = 500; // block -> 500
//     console.log(b);
// }

// console.log(a);
// sam()
// console.log(a);


// --------------------------------------------


// var a = 10; // global  200
// let b = 20; // script  20

// if(true){
//     console.log(a);
//     var a = 200; // global
//     let b = 500; // block  500
//     console.log(b);
// }

// console.log(a); // 
// console.log(b); // 

// 10
// 500
// 200
// 20

// --------------------------------------------


// abc()
// var abc = 10;
// function abc(){
//     console.log("hi guyz");
// }
// abc()




