/**
 * literal types
 * 정해진 문자열만 들어올 수 있게함
 * 변수에 뭐가 들어올지 더 엄격하게 관리 가능(자동완성 힌트)
 */
let name1: 123;
// name1 = 456;
let mod: 'solo' | 'duo';
function run(a: 'hello'): 1 | 0 {
  return 0;
}
run('hello');

type Value = '가위' | '바위' | '보';
function rockPaperScissors(value: Value): Value[] {
  let result: Value[] = [];
  result.push('가위');
  return result;
}
rockPaperScissors('바위');

var data = {
  name: 'kim',
} as const;

function myMethods(a: 'kim') {}
myMethods('kim');
/**
 * literal type의 문제점?
 * 선언된 값 외의 데이터는 들어갈 수 없음
 *
 * data.name은 string이고 값이 kim이여서
 * myMethods가에 data.name을 넣어도 될 것 같지만 되지 않는다.
 * myMethods가 받는 매개변수는 string이 아니라 kim 타입이라는 의미가 돼서
 * 아래 같이 하면 타입이 kim이 아니라는 에러가 발생함
 *
 * 하지만 data에 as const를 붙이면 에러가 사라짐
 * object value 값을 그대로 타입으로 지정해줌.
 * 하지만 as const를 사용하면 readolny가 됨
 */
myMethods(data.name);
