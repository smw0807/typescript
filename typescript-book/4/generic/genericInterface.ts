//하나의 타입 파라미터를 가지는 제네릭 인터페이스 선언
interface Comparator<T> {
  compareTo(value: T): number; //한 개의 타입 파라미터를 가지는 메서드
}

/**
 * Rectangle 클래스 내 compareTo() 메서드는
 * Rectangle 타입 파라미터를 가진다.
 */
class Rectangle implements Comparator<Rectangle> {
  constructor(private width: number, private height: number) {}
  compareTo(value: Rectangle): number {
    return this.width * this.height - value.width * value.height;
  }
}

const rect1: Rectangle = new Rectangle(2, 5);
const rect2 = new Rectangle(2, 3);
// console.log(`rect1 : ${rect1.compareTo(rect1)}`);
rect1.compareTo(rect2) > 0
  ? console.log('rect1 is bigger')
  : rect1.compareTo(rect2) === 0
  ? console.log('rectangles are equal')
  : console.log('rect1 is smaller');

class Programmer implements Comparator<Programmer> {
  constructor(public name: string, private salary: number) {}
  compareTo(value: Programmer): number {
    return this.salary - value.salary;
  }
}

const prog1: Programmer = new Programmer('John', 20000);
const prog2: Programmer = new Programmer('Alex', 30000);

prog1.compareTo(prog2) > 0
  ? console.log(`${prog1.name} is richer`)
  : prog1.compareTo(prog2) === 0
  ? console.log(`${prog1.name} and ${prog2.name} earn the same amounts`)
  : console.log(`${prog1.name} is poorer`);

/**
 * Triangle 클래스 내 compareTo() 메서드는
 * Triangle 타입 파라미터를 가진다.
 */
class Triangle implements Comparator<Triangle> {
  compareTo(value: Triangle): number {
    return 0;
  }
}
