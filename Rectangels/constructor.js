function Rectangle(length, width) {
    this.length = length;
    this.width = width;

    this.getArea = function () {
        return this.length * this.width;
    }
}

let rectangle1 = new Rectangle(8, 3);
let rectangle2 = new Rectangle(60, 10);
let rectangle3 = new Rectangle(9, 5);

console.log(`1. Rechteck:
Länge = ${rectangle1.length}, Breite = ${rectangle1.width}, Fläche = ${rectangle1.getArea()}`);

console.log(`
2. Rechteck:
Länge = ${rectangle2.length}, Breite = ${rectangle2.width}, Fläche = ${rectangle2.getArea()}`);

console.log(`
3. Rechteck:
Länge = ${rectangle3.length}, Breite = ${rectangle3.width}, Fläche = ${rectangle3.getArea()}`);
