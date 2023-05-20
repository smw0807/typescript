class Square {
  constructor(public width: number, public height: number, public color: string){}
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative; 
    top:${a * 400}px; 
    left:${a * 400}px; 
    width:${this.width}px; 
    height : ${this.height}px; 
    background:${this.color}"></div>`;
    document.body.insertAdjacentHTML( 'beforeend', square );
  }
}

let square = new Square(30, 30, 'red');
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();