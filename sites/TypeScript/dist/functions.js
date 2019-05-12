function add(x, y) {
    return x + y;
}
let result = add(10, 20);
let myAdd;
function myAddDeclaration(x, y) {
    return x + y;
}
myAdd = myAddDeclaration;
console.log(myAdd(10, 20));
let myProc;
myProc = function () {
    console.log("Hello world");
};
function getFullName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
let fullNmae1 = getFullName("Ivan", "Ivanov");
let fullNmae2 = getFullName("Ivan");
function getDisplayName(firstName, lastName = "Ivanov") {
    return "Display Name: " + firstName + " " + lastName;
}
let fullNmae3 = getDisplayName("Ivan", "Ivanov");
let fullNmae4 = getDisplayName("Ivan");
let fullNmae5 = getDisplayName("Ivan", undefined);
function printValue(message, ...names) {
    console.log(message);
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
printValue("example");
printValue("example", "1", "2", "3");
let increment = function (x) { return x + 1; };
let incrementArrow1 = (x) => { return x + 1; };
let incrementArrow2 = (x) => x + 1;
let incrementArrow3 = x => x + 1;
incrementArrow3("something");
function repeatOperation(count, callback) {
    console.log("start");
    for (let i = 0; i < count; i++) {
        callback();
    }
    console.log("stop");
}
let settings = {
    displayName: "test object",
    test1: function () {
        repeatOperation(3, (function () {
            console.log(this.displayName);
        }));
    },
    test2: function () {
        repeatOperation(3, () => console.log(this.displayName));
    }
};
settings.test1();
settings.test2();
function showMessage(message) {
    if (typeof message == "number") {
        switch (message) {
            case 1:
                {
                    console.log("Hello world");
                }
                break;
            case 2:
                {
                    console.log("Привет мир");
                }
                break;
        }
    }
    else if (typeof message == "string") {
        console.log(message);
    }
}
showMessage(1);
showMessage("test");
//# sourceMappingURL=functions.js.map