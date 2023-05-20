interface Person {
  id: string;
  name: string;
  password: string;
  age?: number;
}


class Person {
  constructor(data: Person) {
    this.id = data.id;
    this.name = data.name;
    this.password = data.password;
    this.age = data.age
  }
}

interface Person2 {
  id: string;
  name: string;
  password: string;
  age: number;
}

const person = new Person({id: 'smw', name:'minwoo', password:'123', age:5});

const perons: Person2 = {id: 'smw', name:'minwoo', password:'123', age:5};