class newGeneric<T>{
    public value : T;
    public method() : T {
        return this.value;
    }
}
var genericValue = new newGeneric<string>();


function myFunc<T>(value: T): T {
    return value;
}

let value1 = myFunc<string>("test");

let value2 = myFunc<number>(10);


function writeLog<T>(value: T) : T {
    //console.log(value.length); // свойство length не существует на типе Т
    // так как в качестве значения для типа Т может быть любой тип данных
    return value;
}

// функция принимает массив типа Т
function writeLogArray1<T>(value: T[]) : T[] {
    console.log(value.length); // массивы имеют свойство length
    return value;
}
var a = writeLogArray1<number>([1,2]);
function writeLogArray2<T>(value: Array<T>) : Array<T> {
    console.log(value.length);
    return value;
}

function returnArray<T>(value: T[]) : T[]{
    console.log(value.length);  
    for(var key in value){
        console.log(`Key is ${key}`);
    }
    for(var val of value){
        console.log(`Value is ${val}`);
    }
    return value;
} 

let array10 =  returnArray <number>([2,3]);
console.log(array10);


interface GenericFunc {
    <T>(arg: T): T
}

function testFunc<T>(arg: T) : T {
    return arg;
}

let myGenericFunc : GenericFunc = testFunc;

myGenericFunc(10);


interface newTeacher {
    <T>(arg: T) : T;
}

function demoTeacher<T>(T){
    return T;
}

let MechanicalEngineeringTeacher : newTeacher = demoTeacher("Antony");
console.log(`MechanicalEngineeringTeacher  ${MechanicalEngineeringTeacher}`);


class MyGenericClass<T> {
    public value: T;

    public method1(value1: T): void {
        console.log(value1);
    }

    public method2(): T {
        return this.value;
    }
}

// Экземпляр обобщенного типа, закрытого типом number
let myGenericNumber = new MyGenericClass<number>();
myGenericNumber.method1(10);
myGenericNumber.value = 100;
console.log(myGenericNumber.method2());

// Экземпляр обобщенного типа, закрытого типом string
let myGenericString = new MyGenericClass<string>();
myGenericString.method1("hello");
myGenericString.value = "world";
console.log(myGenericString.method2());


class KeyValuePair<TKey, TValue> {
    private _key: TKey;

    public set key(value: TKey) {
        if (value == null || value == undefined) {
            // throw new Error("Значение value не может быть пустым.");
        }
        this._key = value;
    }

    public get key(): TKey {
        return this._key;
    }

    private _value: TValue;

    public set value(value: TValue) {
        if (value == null || value == undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._value = value;
    }

    public get value(): TValue {
        return this._value;
    }
}

let strAndNum = new KeyValuePair<string, number>();
strAndNum.key = "key1";
strAndNum.value = 123;

strAndNum.key = null;




class Dictionary<TKey, TValue> {

    private data: KeyValuePair<TKey, TValue>[] = [];

    public add(key: TKey, value: TValue) {
        let entry = new KeyValuePair<TKey, TValue>();
        entry.key = key;
        entry.value = value;
        this.data.push(entry);
    }
    
    public getValue(key: TKey) : TValue | null {
        for(let i = 0; i < this.data.length; i ++) {
            if(this.data[i].key == key) {
                return this.data[i].value;
            }
        }

        return null;
    }
}

let fructs = new Dictionary<string, string> ();
fructs.add("orange", "апельсин");
fructs.add("watermelon", "арбуз");
fructs.add("apple", "яблоко");

console.log(fructs.getValue("book"));




interface Countable {
    count: number;
}

// <T extends Countable> - ограничение, указывающее на то, что T (type variable) 
// должна быть типом данных, который реализовывает интерфейс Countable, так как
// логика класса SortableList подразумевает использование свойства count
class SortableList<T extends Countable> {

    private data: T[] = [];

    public add(item: T) {
        this.data.push(item);
    }

    public showSorted() {
        // (a, b) => a.count - b.count - данное выражение компилируется благодаря
        // ограничению. TS компилятор знает, что тип данных переданный в качестве T
        // будет содержать свойство count
        let sorted: T[] = this.data.sort((a, b) => a.count - b.count);
        sorted.forEach(x => console.log(x));
    }
}

class OrdersArchive implements Countable {
    count: number;
    month: string;
    totalAmount: number;

    constructor(month: string, count: number, totalAmount: number) {
        this.month = month;
        this.count = count;
        this.totalAmount = totalAmount;
    }
}

let list2 = new SortableList<OrdersArchive>();

list2.add(new OrdersArchive("January", 11, 23400));
list2.add(new OrdersArchive("February", 8, 18100));
list2.add(new OrdersArchive("March", 12, 22900));

list2.showSorted();




interface Copmpare<T>{
    compare(item:T) : boolean;
}

class CollectionItemss<T extends  Copmpare<T>>{
    public data: T[] = [];
    public add(item){
        let unique: boolean = this.data.every(x=>!x.compare(item));
        if(unique){
            this.data.push(item);
        }
    }
}

class MakeOrder implements Copmpare<MakeOrder>{
    constructor(
        public id: number,
        public customer: string,
        public product: string
    ){};
    compare(item: MakeOrder): boolean {
        return item.id == this.id;
    }
}


interface EqualityComparer<T> {
    equals(item: T): boolean;
}

// Для EqualityComparer<T> type variable будет такой же как для UniqueCollection
class UniqueCollection<T extends EqualityComparer<T>> {

    private data: T[] = [];

    public add(item: T) {
        let unique: boolean = this.data.every(x => !x.equals(item));
        if (unique) {
            this.data.push(item);
        }
    }

    public showData() {
        this.data.forEach(x => console.log(x));
    }
}


class Order implements EqualityComparer<Order> {

    constructor(
        public id: number,
        public customer: string,
        public product: string
    ){};

    equals(item: Order): boolean {
        return item.id == this.id;
    }

}

let order1 = new Order(1, "John", "Laptop");
let order2= new Order(2, "Robin", "Mobile Phone");
let order3 = new Order(3, "Bob", "Book");
let order4= new Order(1, "Stephan", "Book");

let collection = new UniqueCollection<Order>();
collection.add(order1);
collection.add(order2);
collection.add(order3);
collection.add(order4);

collection.showData();




interface FructrsComparer<T>{
    compare(item:T):boolean;
}

class fructsCollection<T extends FructrsComparer<T>>{
    public data: T[] = [];
    public add(fruct:T){
        let unique: boolean = this.data.every(x=>!x.compare(fruct));
        if(unique){
            this.data.push(fruct);
        }
    }
    public show(){
        this.data.forEach(x=>console.log(x));
    }
}

class Fruct implements FructrsComparer<Fruct>{
    constructor(public name:string,public price:number){};
    public compare(item: Fruct) : boolean{
        return item.name == this.name;
    }
}

let fruct1 = new Fruct("banana",20);
let fruct2 = new Fruct("orange",10);
let fruct3 = new Fruct("apple",20);
let fruct4 = new Fruct("apple",40);


let collection1 = new fructsCollection();
collection1.add(fruct1);
collection1.add(fruct2);
collection1.add(fruct3);
collection1.add(fruct4);

collection1.show();




// данный интерфейс будет реализован классом, который содержит данные, которые можно извлечь.
// коллекция данных
interface MyIterable<T> {
    values(): MyIterator<T>
}

// данный интерфейс описывает объект, контролирующий обход данных в коллекции
interface MyIterator<T> {
    next(): MyIteratorResult<T>;
}

// данный интерфейс описывает объект, определяющий результаты работы итератора
interface MyIteratorResult<T> {
    done: boolean;
    value: T;
}

class PointNew {
    constructor(public x: number, public y: number) { }
}

// коллекция
class Vector implements MyIterable<Point> {

    private points: Point[] = [];

    public add(item: Point) {
        this.points.push(item);
    }

    values() {
        return new VectorIterator(this.points);
    }
}

// итератор для коллекции Vector
class VectorIterator implements MyIterator<Point> {

    private current: number = 0;

    constructor(private points: Point[]) { }

    public next(): IteratorResult<Point> {
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

let vector: Vector = new Vector();
vector.add(new PointNew(10, 20));
vector.add(new PointNew(1, 30));
vector.add(new PointNew(0, 2));
vector.add(new PointNew(15, 12));

// использование итератора
let iterator = vector.values();
let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}










class MyNumberCollection {

    private data: number[] = [];

    public add(item: number) {
        this.data.push(item);
    }

    [Symbol.iterator]() {
        let current: number = 0;
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
        }
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


// function* - generator function
function* stringSequence() {
    yield "Hello";
    yield " ";
    yield "world";
    yield "!";
}

let iterable1 = stringSequence(); // получение generator object само тело функции не выполняется
let result2 = "";

// когда будет вызван метод next начнет выполнятся generator funciton до первого ключевого слова yield
// после этого функция приостановит свою работу до следующего вызова метода next
for (const item of iterable1) { 
    result2 += item;
}
console.log(result2);

class MyStringCollection {

    private values:string[] = [];

    constructor() {
        this.values[0] = "Hello";
        this.values[1] = " ";
        this.values[2] = "world";
        this.values[3] = "!";
    }

    *getValues() {
        for(let i = 0; i < this.values.length; i ++) {
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