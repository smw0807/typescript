const array1 = [
  { name : 'a' },
  { name : 'b' }
];
const array2 = [
  { name : 'c' },
  { name : 'd' }
]

const array3 = [...array1];
// console.log(array3);

// array3.push(array2);
// console.log(array3);
//[ { name: 'a' }, { name: 'b' }, [ { name: 'c' }, { name: 'd' } ] ]
array3.push(...array2);
console.log(array3);

