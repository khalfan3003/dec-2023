



// sam()

// console.log(a);

// var a = 10;

// function sam(){
//     console.log("i am sam");
// }



// ---------------------------------------------


// function outer(){
//     console.log("i am outer")
//     function inner(){
//         console.log("i am inner")
//         function veryInner(){
//             console.log("i am very inner");
//         }
//     }
// }



// outer();

// -------------------------

// var x = 10;
// let y = 20;
// const z = 30;

// console.log(x);
// console.log(y);
// console.log(z);



// -------------------------


// console.log(x);
// console.log(y);
// console.log(z);

// var x = 10;
// let y = 20;
// const z = 30;


// -------------------------

// Q1: variable inside {} ?
//    => NO ->     VAR      =>  GLOBAL
//          -> LET / CONST  =>  SCRIPT

//    => YES -> Q2: is that {} becoz of fn ?
//                => YES ->     VAR      =>  FUNCTIONAL
//                       -> LET / CONST  =>  BLOCK

//                => NO  ->     VAR      =>  GLOBAL
//                       -> LET / CONST  =>  BLOCK


// LOCAL = FN + BLOCK
// -------------------

var a = 10;   // GLOBAL
let b = 20;   // SCRIPT
const c = 30; // SCRIPT

if(true){
    var d = 100;   // GLOBAL
    let e = 200;   // BLOCK
    const f = 300; // BLOCK
}

function sam(){
    var g = 1000;   // FUNCTIONAL
    let h = 2000;   // BLOCK
    const i = 3000; // BLOCK
}

sam()







