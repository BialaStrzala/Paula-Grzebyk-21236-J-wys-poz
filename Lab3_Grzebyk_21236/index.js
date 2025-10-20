console.log('Lab 3 zad 1');

// 1
const currency1 = require('./currency1');
console.log('Referencja do obiektu export: ');
console.log(currency1.EURtoPLN(10));

// 2
const Currency = require('./currency2');
const currency2 = new Currency(10);
console.log('Poprzez podejście obiektowe: ');
console.log(currency2.EURtoPLN(10));