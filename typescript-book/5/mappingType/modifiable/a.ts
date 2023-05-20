type Modifiable<T> = {
  -readonly [P in keyof T]: T[P];
};

interface Person {
  readonly name: string;
  readonly age: number;
}

const person1: Modifiable<Person> = {
  name: 'minwoo',
  age: 31,
};
person1.name = 'songminwoo'; //수정 가능

const person2: Person = {
  name: 'minwoo',
  age: 31,
};
person2.name = 'songminwoo'; //수정 불가
