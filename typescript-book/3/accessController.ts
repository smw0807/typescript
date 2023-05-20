class Person {
  public firstName = '';
  public lastName = '';
  private age = 0;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  protected sayHello(): string {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  run(): void {
    // this.age //private이라 안됨
  }
}

const person = new Person('john', 'smith', 31);
// console.log(`${person.}`) //age는 안됨
