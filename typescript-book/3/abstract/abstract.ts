//추상 클래스
abstract class Person {
  constructor(public name: string) {}
  changeAddress(newAdress: string) {
    console.log(`Change address to ${newAdress}`);
  }
  giveDayOff() {
    console.log(`Giving a day off to ${this.name}`);
  }
  promote(percent: number) {
    this.giveDayOff();
    this.increasePay(percent); //추상 메서드 호출
  }
  abstract increasePay(percent: number): void; //추상 메서드 선언
}
class Employee extends Person {
  //Employee를 위한 increasePay() 메서드를 구현한다.
  increasePay(percent: number): void {
    console.log(`Increasing the salary of ${this.name} by ${percent}`);
  }
}

class Contractor extends Person {
  //Contractor를 위한 increasePay() 메서드를 구현
  increasePay(percent: number): void {
    console.log(`Increasing the salary of ${this.name} by ${percent}`);
  }
}

//Person 타입 변수는 Employee 또는 Contractor 객체에도 사용할 수 있다?
const workers: Person[] = [];
workers[0] = new Employee('John');
workers[1] = new Contractor('Mary');
workers.forEach(workers => workers.promote(5));
