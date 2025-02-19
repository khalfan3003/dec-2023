// 2 steps -> 1.selection    2.manipulation

// 1. getElementsByTagName() -> array
// let heading1 = document.getElementsByTagName("h1");
// console.log(heading1[0]);
// console.log(heading1[1]);
// // heading1.style.color = "orange" ❌
// heading1[0].style.color = "orange"
// heading1[1].style.color = "orange"


// -----------------------------------
// 2. getElementById() -> single
// let samId = document.getElementById("sam")

// samId.style.color = "red"
// samId.style.backgroundColor = "yellow"
// samId.style.fontSize = "60px"

// console.log(samId);




// -----------------------------------
// 3. getElementsByClassName() -> array

// let vohraArr = document.getElementsByClassName("vohra")

// console.log(vohraArr);
// for(let item of vohraArr){
//     item.style.color = "blue"
//     item.style.backgroundColor = "green"
// }

// dry
// for(let item of vohraArr){
//     item.style.cssText = `
//         color: red;
//         background-color: green;
//         font-size: 50px
//     `
// }


// -----------------------------------
// 4. querySelector() -> single

// let tag  = document.querySelector('h1')
// let idd  = document.querySelector('#sam')
// let clas = document.querySelector('.vohra')

// console.log(tag , idd , clas);




// -----------------------------------
// 5. querySelectorAll() -> array

// let tag  = document.querySelectorAll('h1')
// let idd  = document.querySelectorAll('#sam')
// let clas = document.querySelectorAll('.vohra')

// console.log(tag , idd , clas);