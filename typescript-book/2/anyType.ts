type anyPerson = {
  address: string;
}
let person1: any;
person1 = JSON.parse('{"adress":"25 Broadway"}');
console.log(person1.address); //undefined가 출력됨