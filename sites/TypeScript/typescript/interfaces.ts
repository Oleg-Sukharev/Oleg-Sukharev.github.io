// obj: { name: string } - параметр obj должен быть объектом со свойством name строкового типа
function printValue1(obj: { name: string }) {
    console.log(obj.name);
}

let myObj1 = { 
    value: 10,
    name: "someone"
};

printValue1(myObj1); // myObj1 имеет свойство name

let myObj2 = { data: 10, param: "Hello" };
//printValue1(myObj2); // myObj2 не может использоваться в качестве параметра, так как не имеет свойства name

// определяем интерфейс NamedValue
// Данный интерфейс можно рассматривать как требования к объектам иметь свойство с именем name типа string
interface NamedValue {
    name: string;
}

// функция printValue2 принимает параметр типа NamedValue
// в качестве параметра можно передать экземпляр класса, который реализовал интерфейс
// или объект, который по своей структуре подходит под указанный интерфейс. Использовать приведение типов как в большинстве других языков не нужно
function printValue2(obj: NamedValue) {
    console.log(obj.name);
}

let myObj3 = { 
    value: 10,
    name: "World"
};
printValue2(myObj3); // myObj1 имеет свойство name

let myObj4 = { data: 10, param: "Hello" };
//printValue2(myObj4); // myObj2 не может использоваться в качестве параметра, так как не имеет свойства name


interface RectangleShape {
    name?: string; // свойство не обязательное
    width: number;
    height: number;
}

function drawRectangle(rect: RectangleShape) {
    if(rect.name) {
        console.log("Name - " + rect.name);
    }

    console.log(rect.width + "*" + rect.height);
}

let rectangle1 = {
    name: "Rectangle 1",
    width: 100,
    height: 75
};

let rectangle2 = {
    width: 55,
    height: 33
};

let rectangle3 = {
    name: "Rectangle 3",
    width: 100
};

drawRectangle(rectangle1);
drawRectangle(rectangle2);
//drawRectangle(rectangle3); // у аргумента нет обязательного свойства height


interface PointInterface {
    readonly x: number; // readonly свойство может быть установленно только в момент создания объекта
    readonly y: number;
}

let point: PointInterface = {x: 10, y: 20};
//point.x = 100; // ошибка




// интерфейс описывает сигнатуру функции, функция должна принимать одно строковое значение и возвращать boolean
interface Searchable {
    (value: string) : boolean;
}

let myArray1: Searchable = function (value: string) : boolean {
    return false;
}

// имена параметров не обязательно должны совпадать с именами в интерфейсе
let myArray2: Searchable = function (data: string) : boolean {
    return false;
}


interface Report {
    name: string;
    build: () => string;
}

// implements - ключевое слово для реализации интерфейса в классе
// если члены интерфейса не будут определены в классе компилятор выдаст ошибку
class DailyReport implements Report {
    name: string = "Daily Report";

    build() : string {
        return "some daili report data";
    }
}

class WeaklyReport implements Report {
    name: string = "Weakly Report";

    build() : string {
        return "some weakly report data";
    }
}

console.log(new DailyReport().build());
console.log(new WeaklyReport().build());