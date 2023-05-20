interface Person3 {
  name: string;
  age: number;
}

const a: Person3 = { name: 'minwoo' }; //age가 없어서 안됨
const b: Partial<Person3> = { name: 'minwoo' };
