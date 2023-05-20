class Person {
  data: number = 0; //클래스 필드값
  name: string;
  constructor(name: string) {
      this.name = name;
  }
}

let person1 = new Person('min');
let person2 = new Person('woo');

console.log(person1.data); 