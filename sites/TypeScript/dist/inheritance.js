class Base {
    constructor() {
        this.value1 = "private value 1";
        this.value2 = "public value 2";
        this.value3 = "protected value 3";
    }
    method1() {
        console.log("private method 1 call.");
    }
    method2() {
        console.log("public method 2 call.");
    }
    method3() {
        console.log("protected method 3 call.");
    }
}
class Derived extends Base {
    constructor() {
        super();
        console.log("public property = " + this.value2);
        console.log("protected property = " + this.value3);
        this.method2();
        this.method3();
    }
}
let derived1 = new Derived();
derived1.method2();
console.log(derived1.value2);
class Shape {
    constructor(name) {
        this.name = name;
    }
    getInfo() {
        return `This is ${this.name}.`;
    }
}
class Rect extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    getInfo() {
        let baseInfo = super.getInfo();
        return `${baseInfo} Height = ${this.height}, Width = ${this.width}`;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    getInfo() {
        let baseInfo = super.getInfo();
        return `${baseInfo} Radius = ${this.radius}`;
    }
}
let shapes = [];
shapes.push(new Rect(100, 200));
shapes.push(new Circle(10));
shapes.push(new Circle(43));
shapes.push(new Rect(10, 30));
shapes.push({
    name: "foo",
    getInfo: () => { return "bar"; }
});
for (let i = 0; i < shapes.length; ++i) {
    let info = shapes[i].getInfo();
    console.log(info);
}
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(this.name + " передвигается");
    }
}
class Cat extends Animal {
    constructor() {
        super("Кот");
    }
    makeSound() {
        console.log("Мяу-Мяу");
    }
}
class Cow extends Animal {
    constructor() {
        super("Корова");
    }
    makeSound() {
        console.log("Му-у-у-у");
    }
}
let murzik = new Cat();
murzik.makeSound();
murzik.move();
let burenka = new Cow();
burenka.makeSound();
burenka.move();
//# sourceMappingURL=inheritance.js.map