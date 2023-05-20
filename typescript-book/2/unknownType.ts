type unPerson = {
  address: string;
}
let person2: unknown;
person2 = JSON.parse('{"adress":"25 Broadway"}');
console.log(person2.address); //컴파일 오류 발생