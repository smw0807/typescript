/**
파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 
 */
type TSortOutParams = [...(string | number)[]];
type TSortOutReturn = [string[], number[]];
function sortOut(...x: TSortOutParams): TSortOutReturn {
  let result: TSortOutReturn = [[], []];
  for (let item of x) {
    if (typeof item === 'string') {
      result[0].push(item);
    } else if (typeof item === 'number') {
      result[1].push(item);
    }
  }
  return result;
}

console.log(sortOut('a', 1, 'b', 2, 'c'));
console.log(sortOut('b', 5, 6, 8, 'a'));
//sortOut('a', 2, true);
