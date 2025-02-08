// HOW IT IS BEING CALLED UPON (RUN KAISE KIYA JARA HAI)

// ---------------------------

// 1. function calling -> WINDOW 
// function sam(){
//     console.log(this); // window
// }
// sam();

// ---------------------------

// 2. method calling -> points to the object inside which method is available
// let obj = {
//     a: 10,
//     b: 20,
//     fn: function(){
//         console.log(this); //obj
//     }
// }

// obj.fn()

// ---------------------------

// eg: 


// let obj = {
//     abc: "i am sam",
//     fun : function(){
//         console.log(this , "1"); // obj
//         function bhai(){
//             console.log(this , "2"); // window
//         }
//         bhai()
//     }
// }

// obj.fun();
// // -----------

// let obj2 = {
//     a: 20,
//     fun: function(){
//         console.log(this , "1"); //window
//         function sam(){
//             console.log(this , "2"); //window
//         }
//         sam();
//     }
// }
// let ans = obj2.fun;
// ans()

// -----------------------------------------------------


// 3. constructor calling -> this points to the newly created object


// function sam(user){
//     console.log(this , "this");
    
//     this.naam = user;
// }
// let p1 = new sam("sam");
// let p2 = new sam("mav");
// console.log(p1);
// console.log(p2);

// -------------------------------------

// 4. indirect calling (call, apply, bind)

// let obj1 = {
//     a:10,
//     fn: function(){
//         console.log(this.a); //
//     }
// }
// let obj2 = {
//     a: 50
// }

// obj1.fn(); // 10
// obj2.fn(); // error

// ------


let obj1 = {
    a:10,
    fn: function(x,y,z){
        console.log(this.a , x , y , z); 
    }
}
let obj2 = {
    a: 50
}

// obj1.fn(); // 10

// both are executing the fn with changing this keyword
obj1.fn.call(obj2 , 10 , 20 , 30) //call => change the reference of this keyword, call accepts comma seperated arguments
obj1.fn.apply(obj2 ,[ 100 , 200 , 300]) //apply => change the reference of this keyword, apply accepts arguments in array

// creates a copy of that fn (doesnot execute it)
let copiedFn = obj1.fn.bind(obj2, 10 , 20 , 30) //bind => change the reference of this keyword, creates a copy of that fn
copiedFn()

// -------------------------------------

// 5. arrow function

// function square(n){
//     return n*n
// }
// console.log( square(6) );

// arrow fn 

// way 1
// let square = (n)=>{
//     return n*n
// }
// console.log( square(6) );

// --------

// // way 2
// let square = (n)=> n*n
// console.log( square(6) );

// --------

// way 3
// let square = n => n*n

// console.log( square(6) );


// eg:

// let obj = {
//     a: 10,
//     fn : ()=>{
//         console.log(this , "1"); //window (depends on parent's this)
//         let sam = function(){
//             console.log(this , "2"); //window
//         }
//         sam()
//     }
// }

// obj.fn();

// ------------


// let obj = {
//     a: 10,
//     fn : function(){
//         console.log(this , "1");  // obj
//         let sam = ()=>{
//             console.log(this , "2"); //obj
//         }
//         sam()
//     }
// }

// obj.fn();

// ------------------


// let obj = {
//     a: 10,
//     fn : function(){
//         console.log(this , "1");  // window
//         let sam = ()=>{
//             console.log(this , "2"); //window
//         }
//         sam()
//     }
// }

// let ans = obj.fn;
// ans()

// --------------------

// let obj = {
//     a: 10,
//     fn : ()=>{
//         console.log(this , "1");  // window
//         let sam = ()=>{
//             console.log(this , "2"); //window
//         }
//         sam()
//     }
// }

// obj.fn();
// // or
// let ans = obj.fn;
// ans()
