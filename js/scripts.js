// komentarz liniowy

/* komentarz
blokowy */


// scripts.js

var name = prompt('Enter your name');
// alert('Hello, ' + name);
console.log('Hello, ' + name);

foo = 'lorem' + ['1', 2, 3.4];     // 'lorem1, 2, 3.4'
console.log(foo);
foo = ['1', 2, 3.4] + 'lorem';     // '1,2,3.4lorem'
console.log(foo);
foo = 9 + ['1', 2, 3.4];             // '91,2,3.4'
console.log(foo);
foo = ['1', 2, 3.4] + 9;             // '1,2,3.49'
console.log(foo);
foo = ['1', 2, 3.4] + [1, '2', 3.4];  // '1,2,3.41,2,3.4'
console.log(foo);
foo = ['1', 2, 3.4] + {bar: 'lorem'}; // 1, 2, 3.4 [object Object]
console.log(foo);
foo = {bar: 'lorem'} + [1, '2', 3.4]; // [object Object] 1, 2, 3.4
console.log(foo);
foo = ['1', 2, 3.4] + undefined; // 1, 2, 3.4 undefined
console.log(foo);
foo = undefined + [1, '2', 3.4]; // undefined 1, 2, 3.4
console.log(foo);

var points = 1;

console.log( 'The current value of points is: ', points ); // 1
console.log( 'The current value of points is: ', points++ ); // 1
console.log( 'The current value of points is: ', points ); // 2

var points = 1;

console.log( 'The current value of points is: ', points ); // 1
console.log( 'The current value of points is: ', ++points ); // 2
console.log( 'The current value of points is: ', points ); // 2
