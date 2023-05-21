# 소스맵

웹 브라우저나 자바스크립트 엔진에서는 자바스크립트가 동작하기 때문에 타입스크립트 코드를 컴파일해야 한다.  
어느 프로그램이든 소스 코드를 디버거에 제공해야 하는데, 소스맵 파일을 사용하면 타입스크립트 코드를 디버깅할 수 있다.

소스맵 파일은 .map 확장자로 자바스크립트 코드 조각을 원래 언어(타입스크립트)에 맵핑하는 json 형식의 데이터를 포함하고 있다.  
타입스크립트로 작성된 자바스크립트 프로그램을 디버깅하고자 한다면, 브라우저가 컴파일 중에 생성된 소스맵 파일을 다운로드 하며, 엔진이 자바스크립트를 실행하더라도 타입스크립트 코드 내에 브레이크 포인트를 설정할 수 있다.

```typescript
class Greeter {
  static sayHello(name: string) {
    console.log(`Hello ${name}`);
  }
}
Greeter.sayHello('Min');
```

위 소스 코드를 소스맵으로 컴파일(`tsc greeter.ts --sourceMap true`)하면 greeter.js와 greeter.js.map 파일 2개가 생성된다.  
생성된 .js.map 파일은 사람이 읽을 수는 없지만 file 속성은 생성된 자바스크립트 파일 이름이, source 속성은 타입스크립트 파일임을 알 수 있다.  
mappings 속성에서는 자바스크립트와 타입스크립트 파일 내 코드 조각의 맵핑 정보가 들어있다.  
그럼 자바스크립트 엔진은 맵핑 정보를 포함한 파일이 greeter.js.map 이라고 어떻게 알 수 있느냐?

```javascript
//컴파일로 생성된 greeter.js 소스 코드
var Greeter = /** @class */ (function () {
  function Greeter() {}
  Greeter.sayHello = function (name) {
    console.log('Hello '.concat(name));
  };
  return Greeter;
})();
Greeter.sayHello('Min');
//# sourceMappingURL=greeter.js.map
```

소스 코드 하단에 보면 `//# sourceMappingURL=greeter.js.map` 이걸 통해 알 수 있다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>sourceMap!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="greeter.js"></script>
  </head>
  <body></body>
</html>
```

컴파일된 자바스크립트 파일을 브라우저에서 실행하고 개발자 도구를 열어보면 타입스크립트를 디버깅할 수 있다.

그리고 소스맵파일에는 타입스크립트 소스가 들어 있지 않은데, `--inlineSource true` 옵션을 주고 컴파일을 하면 소스맵 파일에도 타입스크립트 소스 코드가 포함된다.

## 알아둘 점

소스맵 파일을 배포해도 브라우저에서 다운받은 코드 크기는 증가하지 않는다.  
브라우저는 사용자가 개발 도구를 열 경우에만 소스맵 파일을 다운로드 한다.  
만약 사용자가 타입스크립트 소스 코드를 읽지 못하게 하려는 경우 배포 서버에 소스맵 파일을 배포해서는 안됨!!!
