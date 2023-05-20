# d.ts 파일이란?

타입만 저장할 수 있는 파일형식이다. (definition의 약자인 d가 들어감)  
이 파일은 자바스크립트로 컴파일되지 않는다.

## 어디에 쓰이는가?

1. 타입정의만 따로 저장해놓고 import해서 쓰기위해
2. 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스용으로 사용

### 1. [name].d.ts 라고 작성된 파일은 타입 정의만 넣을 수 있다.

`name.d.ts` 라고 작성한 파일은 타입 정의만 넣을 수 있다.  
 type 키워드, interface 이런것들로...  
 함수의 경우 함수에 {} 중괄호 붙이기는 불가능하다.  
 파라미터 & return 타입만 지정가능하다.

```typescript
export type Age = number;
export type multiply = (x: number, y: number) => number;
export interface Person {
  name: string;
}
```

이런 형식으로 생김

### 2. 정의해둔 타입은 export 해서 써야한다.

d.ts 파일은 ts 파일이 아니기 때문에 그냥 써도 ambient module이 되지 않는다.  
그래서 export를 추가해줘야 다른 ts 파일에서 가져다쓸 수 있다.

한 번에 많은 타입을 export하고 싶은 경우 namespace에 담거나, `import * as` 문법을 쓴다.

# d.ts 파일을 레퍼런스용으로 쓰려면

tsconfig.json에 `declaration` 옵션을 `true`로 바꿔주면 ts파일마다 d.ts 파일 생성된다.  
열어보면 타입정의만 쭉 중리되어서 담겨져있다.

```typescript
//index.ts
let aName: string = 'song';
let age = 20;
interface dPerson {
  name: string;
}
let aMan: dPerson = { name: 'minwoo' };

//index.d.ts
declare let aName: string;
declare let age: number;
interface dPerson {
  name: string;
}
declare let aMan: dPerson;
```

# export 없이 d.ts 파일을 글로벌 모듈 만들기

원래 d.ts 파일은 import, export 없어도 로컬모듈이다.  
그래서 다른 ts파일에서 import를 해서 쓸 수 밖에 없는데, 이게 귀찮으면 d.ts를 글로벌 모듈로 만들어서 사용할 수 도 있다.

프로젝트 내에 types/common 이런 폴더 두개를 만들고 tsconfig.json에 `"typeRoots": ["./@types"]` 옵션을 추가해주면 된다.  
이러면 ts파일을 작성할 때 타입이 없으면 자동으로 여기서 타입을 찾아서 적용해준다.

다만, 이걸 쓸 경우 d.ts 자동생성 기능을 끄는게 좋고, d.ts 파일명은 기존 ts 파일명과 안겹치게 작성하는 것이 좋다.  
하지만, 이걸 쓰다가 로컬 타입과 글로벌 타입이 겹치면 또 곤란해지니 import, export가 안전하다.

# 유명한 JS 라이브러리들은 d.ts 파일을 제공

자바스크립트로만 만들어진 라이브러리들 중 유명한 라이브러리들은 대부분 어느정도 d.ts 파일이 만들어져 있어서 찾아서 다운 받거나 하면 된다.  
https://github.com/DefinitelyTyped/DefinitelyTyped  
주로 쓰는 라이브러리를 모아놓은 레파지토리로 대부분 라이브러리의 타입정의 파일을 찾을 수 있다.

또한, 요즘은 npm으로 라이브러리 설치시 타입스크립트 타입정의된 버전을 따로 찾아서 설치할 수도 있다.
https://www.typescriptlang.org/dt/search?search= 여기에 들어가면 타입정의된 npm 패키지를 찾아볼 수 있다.  
타입이 정의된 라이브러리를 npm으로 설치하면 node_moduels/@types 경로에 타입이 설치된다.  
타입스크립트 컴파일러는 자동으로 node_modules/@types 경로에 있는 파일을 참고해서 타입을 가져오게 되어있다.  
만약 typeRoots 옵션이 있을 경우 node_modules/@types 경로를 추가해줘야할 수도 있다.

혹은 따로 타입부분만 설치할 수도 있는데, `npm i @types/packageName` 이렇게 강제로 설치하면된다.  
하지만 있으면 설치되지만 없는 라이브러리도 다수 존재하니 확인을 잘 해봐야한다.
