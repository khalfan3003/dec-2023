


function outer(){
    var a = 10;
    let b = 20;
    function inner(){
        console.log(a);
    }
    return inner;
}

let returnedVal = outer();

returnedVal()







