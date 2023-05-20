//에러를 발생시켜서 함수를 끝내지 않음
function never1(): never {
  throw new Error();
}

//파라미터가 string 뿐인데 잘못된 Narrowing
function never2(param: string) {
  if (typeof param === 'string') {
    console.log(param);
  } else {
    console.log(param);
  }
}

//함수 선언식은 void 타입이 자동으로 리턴 타입이 됨
function never3() {
  throw new Error();
}

//함수 표현식은 nerver 타입이 자동으로 리턴 타입이 됨
const never4 = () => {
  throw new Error();
};
