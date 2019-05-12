
// Типизированная функция. Принимает два аргумента типа number и возвращает значение типа number
//Ошибки: ожидается два параметра ,тип данных только число, возвращаем только число(так как указано :number)
// При создании переменной можно указать тип данных определяющий сигнатуру функции.

function add(x: number, y: number) :number {
    return x + y;
}
let result: number = add(10, 20);


let myAdd: (x: number, y: number) => number; 

function myAddDeclaration(x: number, y: number) : number {
    return x + y;
}

myAdd = myAddDeclaration;
console.log(myAdd(10, 20)); // вызов функции

let myProc: () => void; // переменной может быть присвоена функция, которая ничего не принимает и не возвращает значений
myProc = function() {
    console.log("Hello world");
}

// В TypeScript все параметры функции являются обязательными.
// но если после имени параметра указать символ ? параметр становиться опциональным, и если при вызове его не предоставить
// значение этого параметра будет undefined 
// Опциональные параметры могут быть только последними параметрами в списке параметров метода.
function getFullName(firstName: string, lastName?: string): string { 
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}

let fullNmae1: string = getFullName("Ivan", "Ivanov");
let fullNmae2: string = getFullName("Ivan");


// Параметры со значением по умолчанию - параметры метода, для которых в объявлении функции присвоено значение,
// которое будет использоваться если функция будет вызвана без указания значения для данного параметра или 
// если в качестве значение будет передано undefined
function getDisplayName(firstName: string, lastName: string = "Ivanov") {
    return "Display Name: " + firstName + " " + lastName;
}
let fullNmae3: string = getDisplayName("Ivan", "Ivanov");
let fullNmae4: string = getDisplayName("Ivan");
let fullNmae5: string = getDisplayName("Ivan", undefined); // идентичен предыдущему вызову


// параметр функции в начале имени которого используется ... набор опциональных параметром-
// количество параметров не ограничивается.

function printValue(message: string, ...names: string[]) : void {
    console.log(message);
    for(let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
printValue("example");
printValue("example", "1", "2","3");

//стрелочные функции
let increment = function (x: number) { return x + 1; }
let incrementArrow1 = (x: number) => { return x + 1; }
let incrementArrow2 = (x: number) => x + 1;
let incrementArrow3 = x => x + 1; //x == any type
incrementArrow3("something");//something1


function repeatOperation(count: number, callback: () => void): void {
    console.log("start");
    for (let i = 0; i < count; i++) {
        callback();
        // контекст данной функции - глобальный объект. Если в функции callback используется контекст он тоже будет ссылаться на глобальный объект.
    }
    console.log("stop");
}

let settings = {
    displayName: "test object",

    test1: function () {
        repeatOperation(3, (function () {
            console.log(this.displayName);
        })); // в данном случае this указывает на объект settings
    },

    test2: function() {
        repeatOperation(3, () => console.log(this.displayName)) // arrow function захватывает контекст, в котором была создана)
    } 
};

settings.test1();
settings.test2();


function showMessage(message: string); // первая перегрузка функции, которая принимает один параметр типа string
function showMessage(message: number); // вторая перегрузка функции, которая принимает один параметр типа number
function showMessage(message: any) { // непосредственно реализация функции, не является перегрузкой

    if (typeof message == "number") {
        switch (message) {
            case 1: {
                console.log("Hello world");
            } break;
            case 2: {
                console.log("Привет мир");
            } break;
        }
    }

    else if (typeof message == "string") {
        console.log(message);
    }
}

showMessage(1);
showMessage("test");