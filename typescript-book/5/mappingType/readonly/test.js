const person = [
  { name: 'min', age: 31 },
  { name: 'woo', age: 31 },
];
function filterBy(property, value, array) {
  console.log('property : ', property);
  console.log('value : ', value);
  console.log('array : ', array);
  return array.filter(item => {
    console.log('item : ', item);
    console.log('item[property] : ', item[property]);
    return item[property] === value;
  });
}

const a = filterBytest('name', 'min', person3);
console.log('a : ', a);
