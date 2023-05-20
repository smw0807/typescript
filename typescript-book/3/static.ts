class Gangstar {
  static totalBullets = 100;
  shoot() {
    Gangstar.totalBullets--;
    console.log(`Bullets left: ${Gangstar.totalBullets}`);
  }
}
const g1 = new Gangstar();
g1.shoot;

const g2 = new Gangstar();
g2.shoot;
