type ReturnPromise<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => Promise<R>
  : T;

type Promisify<T> = {
  [P in keyof T]: ReturnPromise<T[P]>;
};

interface SyncService {
  baseUrl: string;
  getA(): string;
}

//SyncService를 Promisify에 맵핑한다.
class AsyncService implements Promisify<SyncService> {
  baseUrl: string; //SyncService에서 수정되지 않는 프로퍼티
  getA(): Promise<string> {
    //변환 타입을 Promise로 래핑한다
    return Promise.resolve('');
  }
}

const service = new AsyncService();
const result = service.getA();

type CheckNum<T> = T extends infer R ? R : null;

const num1: CheckNum<number> = 123;

interface Test {
  baseURL: string;
  getA(): Promise<string>;
}

class promiseTest implements Test {
  baseURL: string;
  getA(): Promise<string> {
    return Promise.resolve('');
  }
}
