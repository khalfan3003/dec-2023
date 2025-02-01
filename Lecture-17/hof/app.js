

// higher order function
function a(fn){
    console.log(a);
    fn();
}
// callback fn
function b(){
    console.log(b);
}

a(b)


// --------------

// higher order fn 
// function outer(){
//     console.log('i am outer');

//     // callback ❌
//     function inner(){
//         console.log("hi i am inner");
//     }

//     return inner;
// }

// outer()
