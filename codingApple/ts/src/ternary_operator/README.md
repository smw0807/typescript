# 조건문으로 타입만들기

if 조건문처럼 조건에 따라 타입 지정도 가능하지만, 자주 사용하는 편은 아니다.  
이런게 있다고 알아두고 필요할 떄 찾아쓰는 게 좋을수도 있음!

# 조건부로 타입만들기

```typescript
type Age<T> = T;
```

이런 타입이 있을 때 `Age<number>` 이렇게 쓰면 그자리에 number가 남는다.  
타입 조건식은 주로 extends 키워드와 삼항연산자를 이용한다.  
extends는 왼쪽이 오른쪽의 성질을 가지고 있냐라는 뜻으로 사용할 수 있기 때문에 나름 조건식 용도로 사용가능하다.  
수학에서 쓰는 ⊂ 이런 기호 역할이라 생각할 수 있다.

```typescript
type Age<T> = T extends string ? string : unknown;

let a: Age<string> = 'a'; //string 타입
let b: Age<number> = 1; //unkonw 타입이됨
```

T라는 파라미터가 string이면 string 타입을, 아니면 unknown 타입을.
