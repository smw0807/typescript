namespace TDog {
  export type Dog = string;
}
namespace IDog {
  export interface Dog {
    name: string;
  }
}

let dog1: TDog.Dog = 'bark';
let dog2: IDog.Dog = { name: 'paw' };
