class newGeneric {
    method() {
        return this.value;
    }
}
var genericValue = new newGeneric();
function myFunc(value) {
    return value;
}
let value1 = myFunc("test");
let value2 = myFunc(10);
function writeLog(value) {
    return value;
}
function writeLogArray1(value) {
    console.log(value.length);
    return value;
}
var a = writeLogArray1([1, 2]);
function writeLogArray2(value) {
    console.log(value.length);
    return value;
}
function returnArray(value) {
    console.log(value.length);
    for (var key in value) {
        console.log(`Key is ${key}`);
    }
    for (var val of value) {
        console.log(`Value is ${val}`);
    }
    return value;
}
let array10 = returnArray([2, 3]);
console.log(array10);
function testFunc(arg) {
    return arg;
}
let myGenericFunc = testFunc;
myGenericFunc(10);
function demoTeacher(T) {
    return T;
}
let MechanicalEngineeringTeacher = demoTeacher("Antony");
console.log(`MechanicalEngineeringTeacher  ${MechanicalEngineeringTeacher}`);
class MyGenericClass {
    method1(value1) {
        console.log(value1);
    }
    method2() {
        return this.value;
    }
}
let myGenericNumber = new MyGenericClass();
myGenericNumber.method1(10);
myGenericNumber.value = 100;
console.log(myGenericNumber.method2());
let myGenericString = new MyGenericClass();
myGenericString.method1("hello");
myGenericString.value = "world";
console.log(myGenericString.method2());
class KeyValuePair {
    set key(value) {
        if (value == null || value == undefined) {
        }
        this._key = value;
    }
    get key() {
        return this._key;
    }
    set value(value) {
        if (value == null || value == undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._value = value;
    }
    get value() {
        return this._value;
    }
}
let strAndNum = new KeyValuePair();
strAndNum.key = "key1";
strAndNum.value = 123;
strAndNum.key = null;
class Dictionary {
    constructor() {
        this.data = [];
    }
    add(key, value) {
        let entry = new KeyValuePair();
        entry.key = key;
        entry.value = value;
        this.data.push(entry);
    }
    getValue(key) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key == key) {
                return this.data[i].value;
            }
        }
        return null;
    }
}
let fructs = new Dictionary();
fructs.add("orange", "апельсин");
fructs.add("watermelon", "арбуз");
fructs.add("apple", "яблоко");
console.log(fructs.getValue("book"));
class SortableList {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    showSorted() {
        let sorted = this.data.sort((a, b) => a.count - b.count);
        sorted.forEach(x => console.log(x));
    }
}
class OrdersArchive {
    constructor(month, count, totalAmount) {
        this.month = month;
        this.count = count;
        this.totalAmount = totalAmount;
    }
}
let list2 = new SortableList();
list2.add(new OrdersArchive("January", 11, 23400));
list2.add(new OrdersArchive("February", 8, 18100));
list2.add(new OrdersArchive("March", 12, 22900));
list2.showSorted();
class CollectionItemss {
    constructor() {
        this.data = [];
    }
    add(item) {
        let unique = this.data.every(x => !x.compare(item));
        if (unique) {
            this.data.push(item);
        }
    }
}
class MakeOrder {
    constructor(id, customer, product) {
        this.id = id;
        this.customer = customer;
        this.product = product;
    }
    ;
    compare(item) {
        return item.id == this.id;
    }
}
class UniqueCollection {
    constructor() {
        this.data = [];
    }
    add(item) {
        let unique = this.data.every(x => !x.equals(item));
        if (unique) {
            this.data.push(item);
        }
    }
    showData() {
        this.data.forEach(x => console.log(x));
    }
}
class Order {
    constructor(id, customer, product) {
        this.id = id;
        this.customer = customer;
        this.product = product;
    }
    ;
    equals(item) {
        return item.id == this.id;
    }
}
let order1 = new Order(1, "John", "Laptop");
let order2 = new Order(2, "Robin", "Mobile Phone");
let order3 = new Order(3, "Bob", "Book");
let order4 = new Order(1, "Stephan", "Book");
let collection = new UniqueCollection();
collection.add(order1);
collection.add(order2);
collection.add(order3);
collection.add(order4);
collection.showData();
class fructsCollection {
    constructor() {
        this.data = [];
    }
    add(fruct) {
        let unique = this.data.every(x => !x.compare(fruct));
        if (unique) {
            this.data.push(fruct);
        }
    }
    show() {
        this.data.forEach(x => console.log(x));
    }
}
class Fruct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    ;
    compare(item) {
        return item.name == this.name;
    }
}
let fruct1 = new Fruct("banana", 20);
let fruct2 = new Fruct("orange", 10);
let fruct3 = new Fruct("apple", 20);
let fruct4 = new Fruct("apple", 40);
let collection1 = new fructsCollection();
collection1.add(fruct1);
collection1.add(fruct2);
collection1.add(fruct3);
collection1.add(fruct4);
collection1.show();
class PointNew {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Vector {
    constructor() {
        this.points = [];
    }
    add(item) {
        this.points.push(item);
    }
    values() {
        return new VectorIterator(this.points);
    }
}
class VectorIterator {
    constructor(points) {
        this.points = points;
        this.current = 0;
    }
    next() {
        if (this.current < this.points.length) {
            return {
                done: false,
                value: this.points[this.current++]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    }
}
let vector = new Vector();
vector.add(new PointNew(10, 20));
vector.add(new PointNew(1, 30));
vector.add(new PointNew(0, 2));
vector.add(new PointNew(15, 12));
let iterator = vector.values();
let next = iterator.next();
while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}
class MyNumberCollection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    [Symbol.iterator]() {
        let current = 0;
        let data = this.data;
        return {
            next() {
                if (current < data.length) {
                    return {
                        done: false,
                        value: data[current++]
                    };
                }
                else {
                    return {
                        done: true,
                        value: null
                    };
                }
            }
        };
    }
}
let myNumberCollection = new MyNumberCollection();
myNumberCollection.add(10);
myNumberCollection.add(20);
myNumberCollection.add(30);
myNumberCollection.add(40);
for (const item of myNumberCollection) {
    console.log(item);
}
function* stringSequence() {
    yield "Hello";
    yield " ";
    yield "world";
    yield "!";
}
let iterable1 = stringSequence();
let result2 = "";
for (const item of iterable1) {
    result2 += item;
}
console.log(result2);
class MyStringCollection {
    constructor() {
        this.values = [];
        this.values[0] = "Hello";
        this.values[1] = " ";
        this.values[2] = "world";
        this.values[3] = "!";
    }
    *getValues() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}
let iterable2 = new MyStringCollection().getValues();
result2 = "";
for (const item of iterable2) {
    result2 += item;
}
console.log(result2);
console.log(iterable2);
//# sourceMappingURL=generics.js.map