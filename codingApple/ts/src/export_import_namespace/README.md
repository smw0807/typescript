# namespace

import, export가 없던 시절 타입스크립트가 타입을 숨기기 위해 사용함

```typescript
namespace MyNamespace {
  export interface PersonInterface {
    age: number;
  }
  export type NameType = number | string;
}
```

중요한 타입정의들을 다른 파일에서 쓰고 싶으면 namespace 안에 써서 export 해줌

```typescript
/// <reference path="./a.ts" />

let 이름: MyNamespace.NameType = '민수';
let 나이: MyNamespace.PersonInterface = { age: 10 };
```

접근하기 위해선 `네임스페이스.타입명`으로 접근을 해야하고, 점을 찍어서 접근하기 때문에 다른 변수명을 오염시키지 않아 변수명 중복선언 문제를 방지할 수 있었음.  
하지만 ES6에 나온 import as 키워드로 namespace와 유사하게 중복문제를 해결 가능해서 namespace는 이제 많이 쓰이지 않음

옛날 `mudule` 이라는 키워드롤 사용했었는데 이게 `namespace` 키워드로 바뀌었었음.
