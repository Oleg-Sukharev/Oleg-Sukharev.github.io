function printValue1(obj) {
    console.log(obj.name);
}
let myObj1 = {
    value: 10,
    name: "someone"
};
printValue1(myObj1);
let myObj2 = { data: 10, param: "Hello" };
function printValue2(obj) {
    console.log(obj.name);
}
let myObj3 = {
    value: 10,
    name: "World"
};
printValue2(myObj3);
let myObj4 = { data: 10, param: "Hello" };
function drawRectangle(rect) {
    if (rect.name) {
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
let point = { x: 10, y: 20 };
let myArray1 = function (value) {
    return false;
};
let myArray2 = function (data) {
    return false;
};
class DailyReport {
    constructor() {
        this.name = "Daily Report";
    }
    build() {
        return "some daili report data";
    }
}
class WeaklyReport {
    constructor() {
        this.name = "Weakly Report";
    }
    build() {
        return "some weakly report data";
    }
}
console.log(new DailyReport().build());
console.log(new WeaklyReport().build());
//# sourceMappingURL=interfaces.js.map