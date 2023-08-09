type ObserverType<T> = (change: {
  prop: keyof T; // T의 프로퍼티 이름(key)들을 담는다. (유니온타입))
  prev: T[keyof T]; //T의 해당 속성 값을 조회
  curr: T[keyof T];
}) => void;

export function createObservable<T extends object>(
  target: T,
  observer: ObserverType<T>
) {
  return new Proxy(target, {
    set(obj: T, prop: string | symbol, value: T[keyof T]) {
      if (typeof prop === 'string' && value !== obj[prop]) {
        const prev = obj[prop];
        obj[prop] = value;
        observer({ prop, prev, curr: value });
      }

      return true;
    },
  });
}
