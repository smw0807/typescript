//데코레이터 팩토리로 하나의 파라미터를 가진다.
function UIcomponent(html: string) {
  //데코레이터로 문자열을 출력한다.
  console.log(`The decorator received ${html}\n`);
  return function (target: Function) {
    //데코레이터 함수
    console.log(`Someone wants to create a UI component from \n ${target}`);
  };
}

@UIcomponent('<h1>Hello Decorator!!</h1>')
class Shopper {
  constructor(private name: string) {}
}
