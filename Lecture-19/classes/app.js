//good prac -> capital letter start
// function Vohra(name , vote , subject){
//     this.naam = name;
//     this.hasVoted = vote;
//     this.mentor = subject;
//     this.greet = function(){
//         console.log(`hey good morning`);   
//     }
// }

// let p1 = new Vohra("Samarth Vohra" , true , "web");
// let p2 = new Vohra("Maverick Vohra" , false , "barking");
// let p3 = new Vohra("kashish Vohra" , true , "pilot");

// console.log(p1);
// p1.greet()
// console.log(p2);
// p2.greet()
// console.log(p3);
// p3.greet()
// --------------------------------------------------------------

// classes -> syntactical sugar

// class Vohra{
//     constructor(name , vote , subject){
//         this.naam = name;
//         this.hasVoted = vote;
//         this.mentor = subject;
//     }
//     greet(){
//         console.log(`hey good morning`);   
//     }
// }

// class Iphone{
//     constructor(name , vote , subject){
//         this.naam = name;
//         this.hasVoted = vote;
//         this.mentor = subject;
//     }
//     greet(){
//         console.log(`hey good morning`);   
//     }
// }

// let p1 = new Vohra("Samarth Vohra" , true , "web");
// let p2 = new Iphone("Maverick Vohra" , false , "barking");


// console.log(p1);
// p1.greet()
// console.log(p2);
// p2.greet()


// // --------------------------------------/

// class Vohra{
//     constructor(name , vote , subject){
//         this.naam = name;
//         this.hasVoted = vote;
//         this.mentor = subject;
//     }
//     greet(){
//         console.log(`hey good morning`);   
//     }
// }

// class Iphone extends Vohra{}

// let p1 = new Vohra("Samarth Vohra" , true , "web");
// let p2 = new Iphone("Maverick Vohra" , false , "barking");


// console.log(p1);
// p1.greet()
// console.log(p2);
// p2.greet()



// // --------------------------------------/

// class Vohra{
//     constructor(name , vote , subject){
//         this.naam = name;
//         this.hasVoted = vote;
//         this.mentor = subject;
//     }
//     greet(){
//         console.log(`hey good morning`);   
//     }
// }

// class Iphone extends Vohra{
//     constructor(name , vote , subject , price){
//         super(name , vote , subject) // will run the parent constructor
//         this.price = price;
//     }
// }

// let p1 = new Vohra("Samarth Vohra" , true , "web");
// let p2 = new Iphone("Maverick Vohra" , false , "barking" , 12000);

// console.log(p1);
// p1.greet()
// console.log(p2);
// p2.greet()


// --------------------------------------/

class Vohra{
    constructor(naam , vote , subject){
        this.naam = naam;
        this.hasVoted = vote;
        this.mentor = subject;
    }
    greet(){
        console.log(`hey good morning`);   
    }
}

class Iphone extends Vohra{
    constructor(name , vote , subject , price){
        super(name , vote , subject) // will run the parent constructor
        this.price = price;
    }
    greet(){
        console.log(`namaste ji`);   
    }
    bye(){
        console.log(`bye bye guyz`);   
    }
}

let p1 = new Vohra("Samarth Vohra" , true , "web");
let p2 = new Iphone("Maverick Vohra" , false , "barking" , 12000);

console.log(p1);
p1.greet()
console.log(p2);
p2.greet()
p2.bye()