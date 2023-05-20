/*
Q. 그럼 파라미터로 array 자료를 입력하면 array의 첫 자료의 타입을 그대로 남겨주고,
array 자료가 아니라 다른걸 입력하면 any 타입을 남겨주는 타입은 어떻게 만들면 될까요?
*/

type FirstItem<T> = T extends any[] ? T[0] : any;

let age1: FirstItem<string[]>;
let age2: FirstItem<number>;
