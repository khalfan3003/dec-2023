

// function sam(){

// }

// console.log( sam() );

// -------------------------------


// function sam(){

// }

// console.log( new sam() );


// -------------------------------


// async function sam(){

//     return 10
// }


// // await


// console.log( sam() );


// -------------------------------

// async function sam() {
//     console.log(10);
//     console.log(20);
//     // call api -> api link
//     let data =  fetch("https://api.tvmaze.com/search/shows?q=girls")
//     console.log(data , "entire data");
//     console.log(30);
// }

// sam()
// ---------------
// async function sam() {
//     console.log(10);
//     console.log(20);
//     // call api -> api link
//     let data =  await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     console.log(data , "entire data");
//     console.log(30);
// }

// sam()

// console.log(100);
// console.log(200);

// -------------

// async function sam() {
//     console.log(10);
//     console.log(20);
//     // call api -> api link
//     let data =  await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     console.log(data , "entire data");
//     console.log(30);
// }

// async function apple(){
//     console.log("hi");
//     console.log("hi 2");
//     let data2 =  await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     console.log(data2 , "2nd time calling");
//     console.log("hi 3");
// }
// sam()
// apple()
// console.log(100);
// console.log(200);



// --------------------------------------------------------------------


// `fetch` returns me a promise -> which returns you data(partial data)
// -> entire data -> .JSON() -> returns a promise too


// ------------------------------------------------------------------

// calling API:

// 1. fetch -> webapi -> returns an promise -> partial data at first
// -> .json() -> waits for the entire data i.e in JSON format
        //    -> returns you a promise

// 2. axios -> library -> returns you a promise -> entire data at once


// ------------------------------
// fetch  and promise
// function apiCall(){
//     fetch("https://api.tvmaze.com/search/shows?q=girls")
//     .then(function(data){
//         console.log(data,"partial data");
//         return data.json()
//     })
//     .then(function(resp){
//         console.log(resp , "entire data");
//     })
//     .catch(function(errr){
//         console.log(errr);
//     })
// }

// apiCall()

// -------------------------
// fetch and async-await
// async function sam() {
//     // call api -> api link
//     let data = await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     let resp = await data.json()
//     console.log(resp , "entire data");
// }
// sam()


// ------------------------------
// axios with promise

// axios.get("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(resp){
//    console.log(resp.data , "then");
// })
// .catch(function(err){
//     console.log(err);
// })


// -------------
// async-await with axios

// async function callApii(){
//     let resp = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
//     console.log(resp.data);
// }
// callApii()

// ------------------------------------------------------------



// async function getData() {
//   console.log('Request started')
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   const data = await response.json()
//   console.log('Data Received')
//   console.log(data)
//   console.log('Request ended')
// }

// getData()
// console.log(10);

// ------------

// console.log('Request started')

// function sam(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Data Received')
//         console.log(data)
//       })
    
//     console.log('Request ended')
// }
// sam()
// console.log(10);


// ------------

setTimeout(() => {
  console.log('Timeout')
}, 0)
Promise.resolve().then(() => console.log('Promise'))
console.log('End')