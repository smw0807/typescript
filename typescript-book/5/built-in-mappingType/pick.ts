interface Person6 {
  name: string;
  age: number;
  address: string;
}

type PersonNameAddress<T, K> = Pick<Person6, 'name' | 'address'>;
