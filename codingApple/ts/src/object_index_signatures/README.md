# index signatures

object 자료에 타입을 미리 만들어주고 싶은데 어떤 속성들이 들어올 수 있는지 아직 모르는 경우나 타입지정할 속성이 너무 많은 경우 index signatures를 사용하면 편리하다.

```typescript
export {};
interface IStringOnly {
  [key: string]: string;
}

let obj: IStringOnly = {
  name: 'kim',
  age: '20',
  location: 'seoul',
};
```

`[key: string]: string` 이렇게 작성하면 모든 string으로 들어오는 key값에 할당되는 value는 string이어야 한다는 타입이 된다.  
쉽게 말하면 { 모든속성 : string } 이라는 뜻과 동일하다.  
딱 코드 한 줄로 모든 속성 타입지정이 가능해서 편리할 수 있다.  
하지만, [] 이 문법을 사용하면 다른 속성과 함께 사용할 순 있지만, 타입은 안된다.

```typescript
interface IStringOnly2 {
  age: string; //됨
  [key: string]: string;
}

interface IStringOnly3 {
  age: number; //안됨 ['age' 형식의 'number' 속성을 'string' 인덱스 유형 'string'에 할당할 수 없습니다.ts(2411)] 에러 출력
  [key: string]: string;
}

interface IStringOnly4 {
  age: number; //됨
  [key: string]: string | number;
}
```

IStringOnly3의 경우 { 모든속성: string, age : number }  
즉, 모든 속성을 string으로 처리한다고 했는데 갑자기 age는 number로 해달라는 건 논리적으로 말이 되지 않아 금지 시킨다.  
IStringOnly4의 경우 { 모든속성: string | number, age: number }가 되는 거고, 논리적으로 가능하기 때문에 사용이 된다.

# array 형태에서의 index signatures

자바스크립트에서 array와 object는 별 다를게 없는 같은 자료형이다.

```typescript
export {};
interface IStringOnly {
  [key: number]: string;
}
let obj: IStringOnly = {
  0: 'song',
  1: '20',
  3: 'seoul',
};
let arr: IStringOnly[] = [{ 0: 'aa' }, { 1: 'bb' }, { 2: 'cc' }];
```

[] 대괄호 안에 key 값의 타입을 number로도 지정할 수 있다.  
대괄호 안에는 string, number만 가능하다.  
하지만, 숫자 key만 넣을거면 그냥 array + tuple 타입을 쓰는 것이 더 직관적일 수 있다.

# Recursive Index Signatures (재귀)

```typescript
let obj = {
  'font-size': {
    'font-size': {
      'font-size': 14,
    },
  },
};
```

이렇게 object안에 object안에 object가 들어있는 object를 타입지정하기 위해선 아래와 같은 방법을 사용할 수 있다.

```typescript
interface IObj {
  'font-size': {
    'font-size': {
      'font-size': number;
    };
  };
}
```

이렇게 직접 중첩되게 만들수도 있지만 아래 처럼하는 방법도 있다.

```typescript
interface IObj {
  'font-size': IObj | number;
}
let obj: IObj = {
  'font-size': {
    'font-size': {
      'font-size': 14,
    },
  },
};
```
