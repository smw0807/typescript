# object 타입 변환기 만들기

모든 속성들에 문자가 들어오는 타입에 갑자기 숫자가 들어오도록 바꾸고 싶을 때 처음부터 타입을 다시 작성하는 것이 아닌 mapping을 이용하면 된다.

# keyof 연산자

keyof는 object 타입에 사용하면 object 타입이 가지고 있는 모든 key 값을 union type(ex: stirng | number)으로 합쳐서 내보내준다.  
object의 key를 뽑아서 새로운 타입을 만들고 싶을 때 사용하는 연산자이다.

```typescript
interface Person {
  age: number;
  name: string;
}
type PersonKeys = keyof Person; //age | name 타입이 된다.
let a: PersonKeys = 'age'; //가능
let b: PersonKeys = 'ageee'; //에러
```

Person 타입은 age, name 이라는 key를 가지고 있기 때문에 PersonKeys는 age | name 타입이 된다. (literal type)

```typescript
interface Person {
  [key: string]: number;
}
type PersonKeys = keyof Person; // string | number 타입이 된다.
let a: PersonKeys = 'age';
let b: PersonKeys = 'ageee';
let c: PersonKeys = 30;
```

index signature와 keyof를 이용하면 모든 속성이기 때문에 string | number 타입이 된다.

# Mapped Types

object 안에 있는 속성들을 다른 타입으로 한번에 변환하고 싶을 때 유용한 타입변환기 만들어보기

```typescript
type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};
```

이런 타입이 있다고 할 때 모든 속성을 string 타입으로 바꾸고 싶다면 아래와 같은 방법을 사용해볼 수 있다.

```typescript
type TypeChanger<T> = {
  [K in keyof T]: string;
};
```

`[자유작명 in keyof 타입파라미터] : 원하는 타입` 형식으로 사용하면 된다.  
이렇게 입력하면 object 타입을 입력했을 때 속성명은 그대로 유지하고 타입만 변환해줄 수 있다.  
in 키워드는 왼쪽이 오른쪽에 들어있냐라는 뜻이고,  
keyof는 object 타입에서 key 값만 uniun type으로 뽑아주는 역할이라 이해하면 된다.

```typescript
type StringCar = TypeChanger<Car>;
let car: StringCar = {
  color: '#000',
  model: 'kia',
  price: '$500',
};
```

```typescript
type Bus = {
  color: string;
  model: boolean;
  price: number;
};
type TypeChanger<O, T> = {
  [K in keyof O]: T;
};

type TypeString = TypeChanger<Bus, string>;
type TypeStringArray = TypeChanger<Bus, string[]>;
type TypeNumber = TypeChanger<Bus, number>;
type TypeBoolean = TypeChanger<Bus, boolean>;

let a: TypeString = {
  color: 'a',
  model: 'b',
  price: 'c',
};

let b: TypeStringArray = {
  color: ['a', 'aa', 'aaa'],
  model: ['b', 'bb', 'bbb'],
  price: ['c', 'cc', 'ccc'],
};

let c: TypeNumber = {
  color: 999,
  model: 1,
  price: 5000,
};

let e: TypeBoolean = {
  color: false,
  model: false,
  price: true,
};
```
