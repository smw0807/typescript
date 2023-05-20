interface Person4 {
  name: string;
  age: number;
}

const c: Partial<Person4> = { name: 'minwoo' };
const d: Required<Person4> = { name: 'minwoo' };
