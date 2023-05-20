export {};
type TypeExport<T> = T extends () => infer R ? R : unknown;
type NewType = TypeExport<() => number>;

let a = (): NewType => {
  return 0;
};

function b(): NewType {
  return 0;
}
