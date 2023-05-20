# declare

JavaScript로 정의된 변수, 함수, 모듈 등을 재정의할 때 사용함

```typescript
declare let a: number;
declare let b;
declare module 'vue-timeago3';
```

`tsconfig.json`안에 allowJs를 true로 설정하면 알아서 타입이 지정됨 `declare`할 필요가 없어지긴함  
상황에 맞게 잘!!

# Ambient Module

타입스크립트의 이상한 특징 중 하나인데 import, export 없이도 타입들을 다른 파일에서 가져다 쓸 수 있음.  
import, export하지 않아도 같은 폴더에 있는 ts 파일 안에 있는 변수와 타입을 자유롭게 사용할 수 있다.  
ts 파일에 입력한 변수와 타입들은 전부 global 변수 취급을 받는다.  
전역으로 쓸 수 있는 파일을 전문용어로 `ambient module` 이라고 칭한다.  
그래서 타입스크립트에서 `let name`이라는 변수 생성이 안되는 이유를 여기서 찾을 수 있다.  
선언해보면 빨간줄이 생기는데 마우스를 올려보면 `lib.dom.d.ts(18092, 15): 여기서도 'name'이(가) 선언되었습니다.` 이런 문구를 볼 수 있다.

하지만 import 혹은 export 키워드가 들어간 ts파일은 다르다.  
import / export 키워드가 적어도 하나가 있으면 그 파일은 로컬 모듈이 되고, 거기 있는 모든 변수는 export 해줘야 다른 파일에서 사용가능하다.  
그래서 타입스크립트 파일이 다른 파일에 영향끼치는 걸 막고싶으면 export 키워드를 강제추가하면 된다.

```typescript
export {};
type Age = number;
```

# declare global

ts 파일에 import/export가 없으면 글로벌 모듈이 되고, 있으면 로컬 모듈이된다.  
만약에 로컬 모듈에서 전역으로 만들고 싶으면 이렇게 하면됨.

```typescript
declare global {
  type Age = number;
}
```

모든 파일에서 Age 타입이 이용이 가능해진다.  
일종의 namespace 문법으로 global이라는 이름의 namespace에 추가된다고 보면 된다.
