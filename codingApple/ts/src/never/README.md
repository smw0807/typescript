# Never type

1. 절대 return을 하지 않아야함
2. 함수 실행이 끝나지 않아야함(endpoint가 없어야함)

```typescript
function 함수(): never {
  while (true) {
    console.log(123);
  }
}

//에러가 나면 코드실행이 중단되니깐 2번 조건을 충족하기 때문에 never를 사용할 수 있음
function 함수(): never {
  throw new Error('에러메세지');
}
```

모든 자바스크립트 함수 맨 밑에는 `return undefined`라는 숨겨진 코드를 가지고 있음.  
그래서 무언가 return 하지 않고(1), 끝나지도 않는 함수(2)를 표현하고 싶을 때 `never` 타입을 지정하면 되는데  
2번 조건의 함수를 만들 일이 거의 없기 때문에 never 타입은 쓸 일이 없음.  
무언가 return 하고싶지 않을 경우 `void` 타입을 이용하면 되며, 가끔 코드를 이상하게 짜다보면 자동으로 `never`가 등장함.

# 파라미터가 never 타입이 되는 경우

```typescript
function 함수(param: string) {
  if (typeof param === 'string') {
    console.log(param);
  } else {
    console.log(param);
  }
}
```

위 함수에 타입이 string이면 콘솔 로그를 출력하도록 작성되어 있음  
하지만 파라미터는 string만 들어오는데 else 문이 존재하는 것 자체가 문제가됨.  
이런 잘못된 narrowing을 사용했을 때 파라미터의 타입이 never로 변함.

# 자동으로 never 타입을 가지는 경우

자바스크립트에는 함수를 만드는 방법이 2가지 있음.  
함수 선언식, 함수 표현식

```typescript
//함수 선언식
funtion run() {
  throw new Error();
}
//함수 표현식
const run = function () {
  throw new Error();
}
```

**함수 선언식**은 아무것도 return 하지 않고 끝나지도 않을 경우 `void` 타입이 자동으로 return 타입으로 할당됨  
**함수 표현식**은 아무것도 return 하지 않고 끝나지도 않을 경우 `never` 타입이 자동으로 return 타입으로 할당됨

또는 tsconfig.json에서 strict 옵션을 켜둘 경우 함수로 any 타입을 지정해주지 않는 경우가 있음.  
그럴 때 array 같은 걸 타입지정하지 않고 만들면 never[] 타입으로 만들어짐
