# implements 키워드

interface는 object 타입을 지정할 떄 사용한다.  
하지만 용도가 한가지 더 있는데 class 타입을 확인하고 싶을 때도 interface 문법을 사용할 수 있다.

```typescript
class Car {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let bb = new Car('morning');
```

Car 클래스로 부터 생성되는 object들은 model과 price 속성을 가지게 된다.  
여기서 class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶을 때 interface + implements 키워드를 사용할 수 있다.

```typescript
interface ICar {
  model: string;
  price: number;
}
class Car implements ICar {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}

let bb = new Car('morning');
```

이렇게 implements를 이용해 interface를 넣으면 이 class가 interface에 있는 속성을 다 들고있는지 체크를 해준다.

# implements는 타입지정문법이 아니다.

implements는 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻이지, class에다가 타입을 할당하고 변형시키는 키워드가 아니다.

```typescript
interface ICar {
  model: string;
  tax: (price: number) => number;
}

class Car implements ICar {
  model; //타입을 지정해주지 않으면 any 타입이됨
  tax(a) {
    //타입을 지정해주지 않으면 any 타입이됨
    return a * 0.1;
  }
}
```

위 코드와 같이 ICar interface를 Car class에 implements를 했다고 class 안의 model이 string 타입이 할당되는 것이 아니고 any 타입이 된다.  
class 함수 tax 또한 마찬가지다 a 파라미터는 number로 할당되지 않고 any 타입이 된다.  
implements는 속성이 들어있지 체크만 해줄 뿐이다.
