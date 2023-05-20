class Person {
  name: string;
}
class Employee extends Person {
  department: number;
}

class Animal {
  name: string;
  breed: string;
}
const workers: Array<Person> = [];

workers[0] = new Person();
workers[1] = new Employee(); //Person 클래스를 확장하므로 Person의 하위 타입이라 사용 가능
workers[2] = new Animal(); //name 프로퍼티가 같아 에러가 발생하지 않음
workers[3] = { name: 'smw' };
