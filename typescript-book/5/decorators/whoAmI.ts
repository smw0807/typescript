//생성자 함수를 파라미터로 취하는 데코레이터를 선언
function whoAmI(target: Function): void {
  console.log(`You are: \n ${target}`); //클래스 정보를 출력
}

@whoAmI
class Firend {
  constructor(private name: string, private age: number) {}
}

const friend = new Firend('minwoo', 31);
console.log(friend);
