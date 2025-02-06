


// function vohra(){

// }

// console.log( vohra() ); // undefined

// ---------------------


// function vohra(){

// }

// console.log( new vohra() ); // {}

// ---------------------


// function vohra(name , vote , subject){
//     this.naam = name;
//     this.hasVoted = vote;
//     this.mentor = subject;
// }

// // `this` points to newly created objects
// let p1 = new vohra("Samarth Vohra" , true , "web");
// let p2 = new vohra("Maverick Vohra" , false , "barking");
// let p3 = new vohra("Kashish Vohra" , true , "pilot");

// console.log(p1);
// console.log(p2);
// console.log(p3);


// ---------------------

function Vohra(name , vote , subject){
    this.naam = name;
    this.hasVoted = vote;
    this.mentor = subject;
    // this.greet = function(){
    //     console.log(`hey good morning`);   
    // }
}

Vohra.prototype.greet = function(){
                            console.log(`hey good morning`);   
                        }
Vohra.prototype.dhakka = function(){
                            console.log(`bye dhakka`);   
                        }

let p1 = new Vohra("Samarth Vohra" , true , "web");
let p2 = new Vohra("Maverick Vohra" , false , "barking");
let p3 = new Vohra("kashish Vohra" , true , "pilot");

console.log(p1);
p1.greet()
console.log(p2);
p2.greet()
console.log(p3);
p3.greet()

// let obj = {a:10} //hardcoded -> Object.prototype




