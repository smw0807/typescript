interface MotorVehicle {
  //클래스에 사용되는 메서드 시그니처들
  startEngine(): boolean;
  endEngine(): boolean;
  brake(): boolean;
  accelerate(speed: number);
  honk(howLong: number): void;
}
interface Flyable extends MotorVehicle {
  //다른 인터페이스를 확장
  fly(howHight: number);
  land();
}
interface Swimmable {
  swim(howFar: number);
}

class Car implements MotorVehicle {
  startEngine(): boolean {
    return true;
  }
  endEngine(): boolean {
    return true;
  }
  brake(): boolean {
    return true;
  }
  accelerate(speed: number) {
    console.log(`Driving faster`);
  }
  honk(howLong: number): void {
    console.log(`Beep beep yeah!!`);
  }
}

const car = new Car(); //Car 클래스 초기화
car.startEngine; //Car API를 사용해 엔진 실행

const cr: Car = new Car(); //타입을 명시적으로 선언
const c: MotorVehicle = new Car(); //MotorVehicle 타입 선언

//Car 클래스를 확장하고 몇 가지 기능을 추가해보기
class SecretServiceCar implements Flyable, Swimmable {
  startEngine(): boolean {
    return true;
  }
  endEngine(): boolean {
    return true;
  }
  brake(): boolean {
    return true;
  }
  accelerate(speed: number) {
    console.log(`Driving faster`);
  }
  honk(howLong: number): void {
    console.log(`Beep beep yeah!!`);
  }
  fly(howHigh: number) {
    console.log(`Flying ${howHigh} feet high`);
  }
  land() {
    console.log(`Landing. Fasten your belts.`);
  }
  swim(howFar: number) {
    console.log(`Swimming ${howFar} feet.`);
  }
}
