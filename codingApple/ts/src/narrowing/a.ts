type Fish = { swim: string };
type Bird = { fly: string };

function animal(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim;
  }
}

let date = new Date();
if (date instanceof Date) {
  //TODO....
}
