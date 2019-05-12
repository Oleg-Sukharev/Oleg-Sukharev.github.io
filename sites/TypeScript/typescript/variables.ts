let message1 = "Hello!";
// явного указания типа 
let message2: string = "Hello!";

// Boolean
let isDone: boolean = false;

//  Number
let a1_decimal: number = 10;
let a2_hex: number = 0x000a
let a3_binary: number = 0b1010
let a4_octal: number = 0o12;

// String
let firstName: string = "Ivan";
let age: number = 25;
let messageTemplate: string = `Hello, my name is ${firstName} I'm ${age} years old.` // template string
let messageConcat: string = "Hello, my name is " + firstName + " I'm " + age + " years old." // concatenation
let year: string[]; // массив строковых значений
year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let list: number[] = [1, 2, 3]; // определение числового массива и его инициализация


let values: Array<number> = [-1, -2, -3]; // создание массива используя generic тип данных Array


// Кортеж - упорядоченный набор фиксированной длины.Кортеж может быть любой длинны
let x: [string, number]; // определение кортежа
x = ["Hello", 10]; // инициализация кортежа

// enum - перечисление, тип данных, который позволяет набору целочисленных значений присвоить имена.
// по умолчанию перечисления нумеруют свои элементы начиная с 0
// каждому элементу перечисления явно устанавливается значение
enum Status { Success = 1, Error = 5, Rejected = 10  }
let c2: Status = Status.Success;
console.log(c2);
console.log(Status);

// так как первому элементу явно установлено значение 2, все последующие будут продолжать нумерацию с 2
// Circle = 2, Triangle = 3, Square = 4
enum Shapes { Circle = 2, Triangle, Square }
let c3: Shapes = Shapes.Square;

let c4: string = Status[1]; // обращаясь к перечислению через индексатор и указывая целочисленное значение можно получить строковое представление этого значения
console.log(c4);

///////////////////////////////////////////////////////////////////////
// Пример использования перечислений
/////////////////////////////////////////////////////////////  

enum Fruit {
    Apple,
    Orange,
    Tomato
}


function drawImage1(fruit: number) {
    let domElement1: HTMLImageElement = document.createElement("img");

    switch(fruit) {
        case 0:
            domElement1.src = "/images/apple.jpg";
        break;
        case 1:
            domElement1.src = "/images/orange.jpg";
        break;
        case 2:
            domElement1.src = "/images/tomato.jpg";
        break;
    }

    document.body.appendChild(domElement1);
}

function drawImage2(fruit: Fruit) {
    let domElement: HTMLImageElement = document.createElement("img");

    switch(fruit) {
        case Fruit.Apple:
            domElement.src = "/images/apple.jpg";
        break;
        case Fruit.Orange:
            domElement.src = "/images/orange.jpg";
        break;
        case Fruit.Tomato:
            domElement.src = "/images/tomato.jpg";
        break;
    }
    document.body.appendChild(domElement);    
}

drawImage1(0); // создать изображение с яблоком (не очевидно)
drawImage2(Fruit.Orange); // создать изображение апельсина (код  самодокументируемый)



// При создании переменой тип которой не известен во время написания приложения можно использовать
// тип данных any. Такой тип удобно применять в ситуациях, когда значение вводиться пользователем или 
// получается в результате работы другой библиотеки. Такой тип данных не проходит проверку во время компиляции.

let someValue: any = "Hello world"; // string
someValue = false; // boolean
someValue = 100; // number

// тип данных void - тип данных указывающий на отсутствие какого-либо значения.
// используется для того чтобы при определении функция явно указать на отсутствие возвращаемого значения.
function myProcedure() : void {
    alert("hello");
}
// тип void можно использовать для определения переменных, но такой переменной можно присвоить только значение undefined или null
let someVoidVal: void = undefined;

let u: undefined = undefined; // переменная типа undefined
let n: null = null; // переменная типа null

// по умолчанию значения null и undefined могут быть присвоены любому другому типу данных
// при опции компилятора --strictNullChecks null и undefined могут быть использованы для инициализации типов void или null и undefined соответственно
let testNumber: number = undefined;
let something: undefined = undefined;

    
// Type assertion - утверждение типов, это операция, которая напоминает приведение типов в других языках программирования.
// С помощью утверждения типов можно подсказать компилятору, конкретный тип с которым мы сейчас работаем. 
let someData: any = "Hello world";
let strLength1: number = (<string>someData).length; // утверждение, что значение someData является типом string использование синтаксиса "angle-bracket"
let strLength2: number = (someData as string).length; // // утверждение, что значение someData является типом string использование синтаксиса "as"

