class Student {
    constructor(firstName = "Andrea", age = 20) {
        this.firstName = firstName;
        this.age = age;
    }
    print() {
        console.log(`Student - ${this.firstName}, age - ${this.age} years.`);
    }
}
let student1 = new Student("Ivan", 25);
let student2 = new Student();
student1.print();
student2.print();
class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.company = "ITVDN";
    }
    printToConsole() {
        console.log(`Employee ${this.name}, position - ${this.position}, company - ${this.company}`);
    }
}
let emp1 = new Employee("Ivan", "Developer");
emp1.name = "John";
emp1.position = "Team Lead";
emp1.printToConsole();
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this.name + " " + this.age);
    }
}
let person = new Person("Jhon", 25);
person.print();
person.name = "someone";
class Rectangle {
    getWidth() {
        return this._width;
    }
    setWidth(value) {
        if (value <= 0) {
            this._width = 1;
        }
        else {
            this._width = value;
        }
    }
    get height() {
        return this._height;
    }
    set height(value) {
        if (value <= 0) {
            this._height = 1;
        }
        else {
            this._height = value;
        }
    }
    calculateArea() {
        return this._width * this._height;
    }
}
let rect1 = new Rectangle();
rect1.setWidth(100);
rect1.height = (-20);
console.log(rect1.getWidth());
console.log(rect1.height);
let rectArea = rect1.calculateArea();
console.log(rectArea);
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Grid {
    constructor() {
        this.points = [];
    }
    add(point) {
        this.points.push(point);
    }
    buildGrid() {
        for (let i = 0; i < this.points.length; i++) {
            console.log(this.points[i]);
        }
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid();
grid1.add(Grid.origin);
grid1.add(new Point(1, 2));
grid1.add(new Point(10, 20));
grid1.add(new Point(12, 24));
grid1.buildGrid();
let grid2 = new Grid();
grid2.add(Grid.origin);
grid2.add(new Point(6, 2));
grid2.add(new Point(7, 2));
grid2.add(new Point(1, 24));
grid2.buildGrid();
//# sourceMappingURL=classes.js.map