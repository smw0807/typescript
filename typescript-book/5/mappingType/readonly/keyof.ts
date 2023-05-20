interface Person {
  name: string;
  age: number;
  gender: string;
  isUse: boolean;
}

type propsName = keyof Person;

type propsType = Person[propsName];
