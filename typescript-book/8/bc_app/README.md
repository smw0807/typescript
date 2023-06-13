# 웹소켓을 사용한 클라이언트-서버 간 통신

## 패키지

- ws : 웹소켓 노드 라이브러리
- express : HTTP를 지원하는 노드 프레임워크
- nodemon : HMR
- lit-html : 브라우저 DOM으로 렌더링하기 위한 자바스크립트 내 HTML 템플릿

## 디렉터리

- public : 빌드 시 생성됨, 블록체인 노드를 위한 웹 클라이언트
  - index.html은 src/client/main.ts를 컴파일한 자바스크립트 파일을 불러옴
- src/client : 클라이언트 단
- src/server : 서버 단
  - main.ts : 추가 스크립트를 가져오고 웹소켓 및 블록체인 알림 서버를 시작
- src/shared : ??
-
