let h1 = document.querySelector('h1');


// h1.setAttribute('class' , 'sam', 'mav', 'vohra') ❌
// h1.setAttribute('class' , 'sam mav vohra') ✅

// ----------------------
// classList
// 1. add()
h1.classList.add('sam', 'mav', 'vohra')

// ----------------------
// 2. remove()
// h1.classList.remove('sam' , 'mav')

// ----------------------
// 3. toggle()
// h1.classList.toggle('sam')

// ----------------------
// 4. contains()
console.log( h1.classList.contains('sam') );
console.log( h1.classList.contains('punjab') );
