enum Direction {
  FtoC,
  CtoF,
}

/**
 *
 * @param temp 변환할 값
 * @param fromTo Direction 타입
 * @returns
 */
function convertTemperature(temp: number, fromTo: Direction): number {
  return Direction.FtoC === fromTo
    ? ((temp - 32) * 5.0) / 9.0
    : (temp * 9.0) / 5.0 + 32;
}

//열거 타입 멤버를 사용해 함수를 호출
console.log(`70F is ${convertTemperature(70, Direction.FtoC)}C`);
console.log(`26C is ${convertTemperature(26, Direction.CtoF)}F`);
