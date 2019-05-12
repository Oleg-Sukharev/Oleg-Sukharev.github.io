let message1 = "Hello!";
let message2 = "Hello!";
let isDone = false;
let a1_decimal = 10;
let a2_hex = 0x000a;
let a3_binary = 0b1010;
let a4_octal = 0o12;
let firstName = "Ivan";
let age = 25;
let messageTemplate = `Hello, my name is ${firstName} I'm ${age} years old.`;
let messageConcat = "Hello, my name is " + firstName + " I'm " + age + " years old.";
let year;
year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let list = [1, 2, 3];
let values = [-1, -2, -3];
let x;
x = ["Hello", 10];
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Error"] = 5] = "Error";
    Status[Status["Rejected"] = 10] = "Rejected";
})(Status || (Status = {}));
let c2 = Status.Success;
console.log(c2);
console.log(Status);
var Shapes;
(function (Shapes) {
    Shapes[Shapes["Circle"] = 2] = "Circle";
    Shapes[Shapes["Triangle"] = 3] = "Triangle";
    Shapes[Shapes["Square"] = 4] = "Square";
})(Shapes || (Shapes = {}));
let c3 = Shapes.Square;
let c4 = Status[1];
console.log(c4);
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Orange"] = 1] = "Orange";
    Fruit[Fruit["Tomato"] = 2] = "Tomato";
})(Fruit || (Fruit = {}));
function drawImage1(fruit) {
    let domElement1 = document.createElement("img");
    switch (fruit) {
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
function drawImage2(fruit) {
    let domElement = document.createElement("img");
    switch (fruit) {
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
drawImage1(0);
drawImage2(Fruit.Orange);
let someValue = "Hello world";
someValue = false;
someValue = 100;
function myProcedure() {
    alert("hello");
}
let someVoidVal = undefined;
let u = undefined;
let n = null;
let testNumber = undefined;
let something = undefined;
let someData = "Hello world";
let strLength1 = someData.length;
let strLength2 = someData.length;
//# sourceMappingURL=variables.js.map