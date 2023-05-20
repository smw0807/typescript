class Person {
  id: number;
  name: string;
  age: number;
}

type RemoveProps<T, K> = Exclude<keyof T, K>;

//Person 타입이지만 name과 age를 제거하여 id 프로퍼티만 남는다.
type RemainingProps = RemoveProps<Person, 'name' | 'age'>;

//id 프로퍼티만 들어있다.
type PersonBlindAuditions = Pick<Person, RemainingProps>;
