# interface
object 타입지정시 사용 가능   
class 만드는 법과 유사함    

## interface 합치기
extends 사용  
```typescript
interface Student {
    name: string;
}

interface Teacher extends Student {
    age: number;
}
```

## type 합치기
& 기호 사용 (intersection type)   
두 타입을 만족하는 타입이라는 뜻
```typescript
type Animal = {
    name: string;
}
type Cat = {
    age: number;
} & Animal;
```
interface를 쓸 수도 있음(반대로도 가능)
```typescript
type human = {
    gender: 'M' | 'F'
} & Student;

interface Student {
    name: string;
}
```

# type과 interface의 차이
## interface는 중복선언 가능   
중복 선언을 하면 하나로 합쳐짐
```typescript
interface Student {
    name: string;
}
interface Student {
    age: number;
}
```
```typescript
//이게됨
interface Student {
    name: string;
    age: number;
}
```
같은 속성에 타입만 다르면 마지막 타입이 적용됨
```typescript
interface Student {
    name: string;
}

interface Teacher extends Student {
    name: number;
}
// name은 number만 사용할 수 있게됨
```
외부 라이브러리같은 경우는 interface를 많이 씀   
그래서 오버라이드하기가 편리함   
다른 사람이 많이 이용할 것 같거나 object 타입정할 때는 interface를 쓰는 게 좋을 수 있음   

## type은 중복선언 불가능   
타입에 대해 엄격함   
중복 시 never 타입?   
```typescript
type Animal = {
    name: string;
}
type Cat = {
    name: number;
} & Animal;
```
이렇게되면 string도 만족해야하고 number도 만족해야하는 상태됨   
`let cat: Cat = { name: 5 as never}` 이렇게하면 되는데 쓰지말것



