class Person1 {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number
  ) {} //슈퍼 클래스의 생성자
  sellStock(symbol: string, numberOfShares: number): void {
    console.log(`Selling ${numberOfShares} of ${symbol}`);
  }
}
class Employee1 extends Person1 {
  constructor(
    //서브클래스 Employee1의 생성자
    firstName: string,
    lastName: string,
    age: number,
    public department: string
  ) {
    super(firstName, lastName, age); //슈퍼 클래스 생성자를 호출한다.
  }
  sellStock(symbol: string, shares: number): void {
    super.sellStock(symbol, shares); //슈퍼 클래스의 sellStock()을 호출
    this.reportToCompliance(symbol, shares);
  }
  private reportToCompliance(symbol: string, shares: number) {
    console.log(
      `${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`
    );
  }
}

const empl = new Employee1('Joe', 'Smith', 29, 'Acoounting'); //서브클래스를 인스턴스 생성한다.
empl.sellStock('IBM', 100);
