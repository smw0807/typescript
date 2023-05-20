interface Person2 {
  name: string;
  age: number;
}

const worker2: Person2 = { name: 'minwoo', age: 31 };
function doStuff(person: Readonly<Person2>) {
  person.age = 30;
}
