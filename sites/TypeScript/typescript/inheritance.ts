class Base {
    private value1: string;
    public value2: string;
    protected value3: string;

    constructor() {
        this.value1 = "private value 1";
        this.value2 = "public value 2";
        this.value3 = "protected value 3";
    }

    private method1() {
        console.log("private method 1 call.");
    }

    public method2() {
        console.log("public method 2 call.");
    }

    protected method3() {
        console.log("protected method 3 call.");
    }
}

class Derived extends Base { // класс Derived наследует класс Base, класс Derived расширяет класс Base

    constructor() {
        
        super(); // Вызов конструктора базового класса. Обязательная операция при наследовании. 
        
        console.log("public property = " + this.value2);
        console.log("protected property = " + this.value3);

        // this.method1(); // метод private, скрыт  
        this.method2();    // public - открыт для всех  
        this.method3();    // protected - доступен, так как данный класс является наследником
    }
}

let derived1: Derived = new Derived();

// доступен только метод method2, так как он public. Остальные методы не доступны так как данный код находится за пределами класса
derived1.method2(); 
console.log(derived1.value2);

// базовый тип данных
class Shape {
    public name: string;

    constructor(name) {
        this.name = name;
    }

    public getInfo(): string {
        return `This is ${this.name}.`;
    }
}

// производный тип данных
class Rect extends Shape {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        super("Rectangle"); // запуск конструктора родительского класса
        this.width = width;
        this.height = height;
    }

    public getInfo(): string {
        let baseInfo: string = super.getInfo(); // вызов метода родительского класса
        return `${baseInfo} Height = ${this.height}, Width = ${this.width}`;
    }
}

// производный тип данных
class Circle extends Shape {
    public radius: number;

    constructor(radius: number) {
        super("Circle");
        this.radius = radius;
    }

    public getInfo(): string {
        let baseInfo: string = super.getInfo();
        return `${baseInfo} Radius = ${this.radius}`;
    }
}

let shapes: Shape[] = []; // создание массива базового типа
shapes.push(new Rect(100, 200)); // заполнение массива экземплярами производного класса
shapes.push(new Circle(10));
shapes.push(new Circle(43));
shapes.push(new Rect(10, 30));

// в массив shapes можно добавлять только объекты имеющие идентичную с классом Shape структуру
shapes.push({
    name: "foo",
    getInfo: () => { return "bar"}
});

for(let i = 0; i < shapes.length; ++i) {
    let info: string = shapes[i].getInfo();
    console.log(info);
}

// abstract - ключевое слово, которое позволяет создавать абстрактные методы и абстрактные классы.
// абстрактный класс - это класс, который может выступать только в роли базового класса. Создать экземпляр абстрактного класса не получится.
// абстрактный метод - это метод, который не имеет реализации в текущем классе но обязательно должен быть реализован в производном классе.
// абстрактные методы могут создаваться только в абстрактных классах.

abstract class Animal { // абстрактный класс
    constructor(public name: string) { }

    abstract makeSound(); // абстрактный метод

    public move(): void {
        console.log(this.name + " передвигается")
    }
}

class Cat extends Animal {
    constructor() {
        super("Кот");
    }

    makeSound() { // обязательная реализация абстрактного метода из базового класса. Попробуйте удалить этот метод из класса Cat
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

let murzik: Cat = new Cat();
murzik.makeSound();
murzik.move();

let burenka: Cow = new Cow();
burenka.makeSound();
burenka.move();


