/**
1. 이 함수의 첫째 파라미터는 문자,
2. 둘째 파라미터는 boolean,
3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 
 */
function tq(...x: [string, boolean, ...(number | string)[]]) {
  console.log(x);
}
tq('a', true, 123, 123, 123, 123, 123, '123123 ', 123123);
tq('b', false, 'bbbb', 123, '113', 123, '123');
