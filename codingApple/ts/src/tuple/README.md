# tuple type

array 자료에 타입을 지정할 때 보통 string[], number[] 등을 이용한다.  
이 외에도 구체적으로 타입을 지정하고 싶을 때 tuple 타입을 이용할 수 있다.

## tuple type이란?

array에 붙일 수 있는 타입으로 자료의 위치까지 정확하게 지정할 수 있는 타입이다.

```typescript
let dog: [string, boolean];
dog = ['dog', true];
```

[] 괄호 안에 타입을 적으면 tuple 타입이 된다.  
[] 괄호 안에 차례로 세부 타입을 기입하면 된다.

# tuple 응용 : rest parameter

```typescript
function duple2(...x: string[]) {
  console.log(x);
  //[ 'a', 'b', 'c', 'd' ]
}
duple2('a', 'b', 'c', 'd');
```

이렇게 rest parameter를 사용한 함수에서 tuple을 사용하면

```typescript
function tuple22(...x: [string, number]) {
  console.log(x);
}
tuple22('aaa', 111);
tuple22('bbb', 222);
tuple22('ccc', 333);
```

이런 식으로 사용할 수 있다.  
다만 이렇게 하면 일반 파라미터 2개를 넣는 것과 기능상 다를 바는 없긴 한데  
차이가 있다면 파라미터가 전부 array에 담겨서 오는 것과 rest parameter를 엄격하게 사용할 수 있게 된다.

## tuple 안 옵션

```typescript
type Tuple3 = [number, number?, number?];
let tp1: Tuple3 = [1];
let tp2: Tuple3 = [1, 2];
let tp3: Tuple3 = [1, 2, 3];
//let tp4: Tuple3 = [1, 2, 3, 4]; //error
```

### 주의할 점

```typescript
type Tuple33 = [number, number?, number];
```

옵션 기호는 중간에 넣는거 안됨!!!!!

# array 두개를 spread 연산자로 합칠 때 tuple?

```typescript
let arr = [1, 2, 3];
let arr2 = [4, 5, ...arr];
```

arr2에 arr를 spread연산자를 시용해 담을 때 tuple 타입을 지정해준다면

```typescript
type Tuple4 = [number, number, ...number[]];
let arr = [1, 2, 3];
let arr2: Tuple4 = [4, 5, ...arr];
let arr3: Tuple4 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
```

이렇게 지정해서 사용할 수 있다.
