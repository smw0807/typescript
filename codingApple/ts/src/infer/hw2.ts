export {};
type TypeExport<T> = T extends (x: infer R) => any ? R : any;

type a = TypeExport<(x: number) => void>; //이러면 number가 이 자리에 남음
type b = TypeExport<(x: string) => void>; //이러면 string이 이 자리에 남음
