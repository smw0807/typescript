null && undefined 타입체크하는 경우가 매우 잦음

# in 키워드로 object narrowing 가능

`속성명 in 오브젝트자료`

```typescript
type Fish = { swim: string };
type Bird = { fly: string };

function animal(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim;
  }
}
```

서로 가진 속성명이 다르면 in을 사용해볼 수 있음.
