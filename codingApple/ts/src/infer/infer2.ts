export {};
type TypeExport<T> = T extends (infer R)[] ? R : unknown;
type NewType = TypeExport<boolean[]>;

let a: NewType = true;
