enum Weekday {
  Monday = 1,
  Tueday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
// enum Weekday {
//   Monday = 1,
//   Tueday = 2,
//   Wednesday = 3,
//   Thursday = 4,
//   Friday = 5,
//   Saturday = 6,
//   Sunday = 7,
// }

let dayValue = Weekday.Wednesday;
let dayLabel = Weekday[3];
console.log(dayValue);
console.log(dayLabel);
