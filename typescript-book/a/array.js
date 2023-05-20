const customer = ['Smith', 'Clinton', 'Lou', 'Gonzales'];

var [a, b] = customer;
console.log(a, b);
var [a,, b, c] = customer;
console.log(a, b, c);
var [a, ...other] = customer;
console.log(a, other);