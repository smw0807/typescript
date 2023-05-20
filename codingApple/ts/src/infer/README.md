# infer 키워드

조건문에 사용할 수 있는 특별한 키워드로, infer 키워드는 지금 입력한 타입을 변수로 만들어주는 키워드이다.

```typescript
type Person<T> = T extends infer R ? R : unknown;
type nType = Person<string>; //string 타입
```

infer 키워드는 조건문 안에서만 사용가능하다.  
infer 우측에 자유롭게 작명하면 타입을 T에서 유추해서 R이라는 변수에 집어넣으라는 뜻이다.  
위 소스코드에서 R은 string이 된다.  
R을 조건식 안에서 마음대로 사용가능하다.  
이런 식으로 타입파라미터에서 타입을 추출해서 쓰고싶을 때 쓰는 키워드라고 보면 된다.

## 어떤 용도로 쓰이는지?

### 1. array 안에 있던 타입이 어떤 타입인지 뽑아서 변수로 만들어줄 수 있다.

```typescript
type TypeExport<T> = T extends (infer R)[] ? R : unknown;
type NewType = TypeExport<boolean[]>;
```

`(infer R)[]` 이렇게 하면 array가 가지고 있던 타입부분만 뽑아서 R 변수에 할당할 수 있다.

### 2. 함수의 return 타입이 어떤 타입인지 뽑아서 변수로 만들어줄 수 있다.

```typescript
type TypeExport<T> = T extends () => infer R ? R : unknown;
type NewType = TypeExport<() => number>;

let a = (): NewType => {
  return 0;
};

function b(): NewType {
  return 0;
}
```

타입파라미터에 <함수>를 집어넣었고, 그 타입파라미터에 있는 return 타입을 뽑아서 R이라는 변수에 담는 코드이다.  
일정한 규칙이 있다기 보다 그냥 타입을 추출하는 식으로 이해하면 된다.  
하지만 이건 직접 만들어 쓸 일은 거의 없고 `ReturnType<>`이라는 기본 함수를 쓰면 알아서 추출된다.
