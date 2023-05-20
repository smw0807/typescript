function area(shape) {
    switch (shape.kind) {
        case 'rectangle': return shape.height * shape.width;
        case 'circle': return Math.PI * Math.pow(shape.radius, 2);
    }
}
var a = {
    kind: 'rectangle',
    width: 200,
    height: 200
};
var myRectangle = area(a);
console.log(myRectangle);
var b = {
    kind: "circle",
    radius: 30
};
var myCircle = area(b);
console.log(myCircle);
