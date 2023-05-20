interface Person1 {
  readonly name: string;
  readonly age: number;
}
const worker1: Person1 = { name: 'min', age: 31 };
function doSuff(person: Person1) {
  person.age = 31;
}
