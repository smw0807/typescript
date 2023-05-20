export {};
type Person<T> = T extends infer R ? R : unknown;
type nType = Person<string>; //string 타입
