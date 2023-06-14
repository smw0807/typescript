# 웹소켓을 사용한 블록체인 클라이언트-서버 간 통신

## 패키지

- express : HTTP를 지원하는 노드 웹 프레임워크
- lit-html : 브라우저 DOM으로 렌더링하기 위한 자바스크립트 템플릿 라이브러리
- ws : 노드 웹소켓 패키지
- @types/express : express 타입 정의 파일
- @types/ws : 웹소켓 타입 정의 파일
- concurrently : 동시에 명령어를 실행하는 패키지
- nodemon : 소스 코드 변경 시 노드 런타임을 다시 로드하는 도구
- ts-node : tsc와 node를 단일 프로세스로 실행
- typescript : typescript
- typescript-lit-html-plugin : HTML 태그 입력을 도와주는 IntelliSense 도구

## 프로젝트 환경 설정

tsconfig.json 파일은 extends키워드와 config 프로퍼티를 사용해 다른 파일에서 구성을 상속할 수 있다.

- tsconfig.json : 클라이언트와 서버가 모두 사용하는 옵션을 저장
- src/client/tsconfig.client.json : 클라이언트를 위한 옵션을 저장
- src/server/tsconfig.server.json : 서버를 위한 옵션을 저장

## 디렉터리

- public : 빌드 시 생성됨, 블록체인 노드를 위한 웹 클라이언트
  - index.html은 src/client/main.ts를 컴파일한 자바스크립트 파일을 불러옴
- src/client : 클라이언트 단
- src/server : 서버 단
  - main.ts : 추가 스크립트를 가져오고 웹소켓 및 블록체인 알림 서버를 시작
- src/shared : ??

### nodemon.json

```json
{
  "exec": "node -r ts-node/register/transpile-only", //노드를 실행
  "watch": ["src/server/**/*.ts"]
}
```

exec 명령어로 Node.js 실행 옵션을 지정했다. -r 옵션은 —require 단축키로 실행 전 모듈을 먼저 로딩한다.  
transpile-only 모듈은 타입 검사 없이 타입스크립트를 자바스크립트 코드로 컴파일하는 모듈로 ts-node 패키지가 transpile-only 모듈을 미리 로딩하도록 요청한다.
transpile-only 모듈을 프리로딩하면, 서버에 별도로 tsc 프로세스를 시작할 필요가 없다.  
모든 타입스크립트 파일이 로드되고 단일 Node.js 프로세스에서 자동으로 변환된다.
