class AppState {
  //외부에서 접근 가능하며 단일 인스턴스에서만 그 값을 저장한다.
  counter = 0;
  private static instanceRef: AppState; //AppState의 단일 인스턴스에 대한 참조를 저장한다.
  // private constructor() {} //private 생성자는 AppState와 함께 새 연잔자를 사용할 수 없다.
  static getInstance(): AppState {
    //AppState의 인스턴스를 가져올 수 있는 메서드이다.
    if (AppState.instanceRef === undefined) {
      AppState.instanceRef = new AppState(); //AppState 객체가 존재하지 않으면 인스턴스화 한다.
    }
    return AppState.instanceRef;
  }
}

// const appState = new AppState(); //private 생정자 떄문에 오류 발생함

//AppState 인스턴스에 대한 참조를 가져옴
const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();

//counter 값 수정. (두 개의 참조 변수를 사용);
appState1.counter++;
appState1.counter++;
appState2.counter++;
appState2.counter++;

console.log(appState1.counter);
console.log(appState2.counter);
