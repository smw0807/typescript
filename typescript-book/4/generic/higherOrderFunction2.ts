/**
 * 파라미터 타입이 다른 고차함수가 후촐되더라도 동일한 함수 시그니처
 * (c: number) => number;를 반환하도록...?
 */

//제네릭 타입 T나 (c: number) => number;를 반환하는 함수를 선언?
type numFunc<T> = (arg: T) => (c: number) => number;

//파라미터가 없는 함수를 호출
const noArgFunc: numFunc<void> = () => (c: number) => c + 5;

//숫자 파라미터를 가진 함수를 호출
const numArgFunc: numFunc<number> =
  (someValue: number) => (multiplier: number) =>
    someValue * multiplier;

//문자열 파라미터를 가진 함수를 호출
// const stringArgFunc: numFunc<string> = (someText: string) => (padding: number) => someText + padding; //return이 number가 아니라 에러
const stringArgFunc: numFunc<string> =
  (someText: string) => (padding: number) =>
    someText.length + padding;
