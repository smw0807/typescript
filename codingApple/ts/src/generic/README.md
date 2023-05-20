# Generic

함수를 만들 때 ( ) 괄호 안에 파라미터를 입력할 수 있듯이 타입스크립트에서는 < >를 이용해 파라미터로 타입을 입력할 수 있다.  
<T> 타입파라미터

## generic을 이용한 함수 만들기

```typescript
function g2<T>(x: T[]): T {
  return x[0];
}

let generic1 = g2([4, 2]);
let generic2 = g2(['a', 'b']);
console.log(generic1); //4
console.log(generic2); //a

let generic3 = g2<string>(['aaa', 'bbb']);
let generic4 = g2<number>([1, 2, 3]);

console.log(generic3); //aaa
console.log(generic4); //1
```

g2에 이제 `g2<string>()` 이렇게 하면 `g2(x: string): string`과 똑같이 동작한다.

제네릭을 쓰면 정한 타입을 return 값으로 반환하는 함수를 만들 수 있다. ( <> 문법만 잘 쓰면됨 )
위 코드에서 generic3, 4변수 처럼 함수에 <>를 안써도 기본타입을 유추해서 집어넣음 (generic1, 2 처럼)

## Generic 타입 제한하기 (constraints)

extends를 이용하면 넣을 수 있는 타입을 제한할 수 있다.  
interface의 extneds는 복사하는 개념인데, 제네릭에서의 extends는 if문으로 비슷한 속성을 가지고 있는지 체크하는 문법이라고 생각하면 된다.

```typescript
function g3<T extends number>(x: T): T {
  return x;
}
let number1 = g3(3);
let number2 = g3('3'); //number가 아니라 에러
```

`<T extends number>` : 들어오는 타입이 number인지 체크한다고 생각.  
일종의 narrowing이라고 생각하면됨.

## 커스텀 타입도 extends가 가능하다.

```typescript
function g4<T>(x: T) {
  return x.length;
}
let lenthCheck1 = g4<string>('hello');
```

위 코드에서 length 부분에 에러가 발생한다.  
lengthCheck1에서 string으로 타입을 지정 후 string을 파라미터로 넘겼지만,  
g4의 함수에서 타입파라미터에 string만 받는다는 타입 선언이 없기 때문에 number나 다른 것들도 올 수 있어서 에러가 발생한다.

```typescript
interface lengthCheck {
  length: number;
}

function g44<T extends lengthCheck>(x: T) {
  return x.length;
}

let lengthCheck2 = g44('HELLO!!');
// let lengthCheck3 = g44(123); //number 형식에는 length를 사용할 수 없어 에러남
```

`<T extends lengthCheck>`는 들어오는 타입이 lengthCheck가 가지고 있는 length 속성을 가지고 있는 타입인지 확인한다.  
보통 length 속성을 가지고 있는 타입은 string이나 array이다.  
이제 T는 length가 분명히 있다고 판단하기 때문에 T를 부여받은 x는 .length 조작이 가능하다.

### 참고

class도 `class<T> { }` 이런 식으로 만들면 new로 인스턴스를 생성할 때 타입파라미터를 집어넣을 수 있다.  
그리고 `type TUser<T> = T;` 이런 식으로 타입변수도 사용 가능하다.
