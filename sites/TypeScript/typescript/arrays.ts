//ForEach - обход всех элементов массива и запуск определенной функции для значения каждого элемента.

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum: number = 0;

array.forEach(value => sum += value);
console.log("sum " + sum);

array.forEach((value: number, index: number, array: number[]) => {
    array[index] = value + 1;
})

console.log(array);
     

 // map - обходит все элементы массива и возвращает новый массив со значениями, которые вернула указанная функция.

let array2: number[] = [1, 2, 3, 4, 5];

let array3: number[] = array2.map(function (value) {
    return value * value;
})

console.log(array2);
console.log(array3);

// filter - возвращает новый массив состоящий из элементов отобраных функцией.

let array4: number[] = [1, 2, 3, 4, 5, 6];

var array5 = array4.filter(value => value % 2 == 0); // получить все четные элементы

console.log(array4);
console.log(array5);


// every - функция вовращает true если все элементы удовлетворяют условие.
// some - функция вовращает true если хотя бы один элемент удовлетворяет условие.

let data1: number[] = [1, 2, 3, 4, 5, 6];
let data2: number[] = [11, 21, 31, 41];
let data3: number[] = [1, 3, 5, 7, 9];
let data4: number[] = [1, 3, 5, 7, 8, 9];


//es6
let res1: boolean = data1.every(value => value > 10);

//es5

let restES5: boolean = data1.every(function(item) : boolean {
    return item > 10; 
})

let res2: boolean = data2.every(value => value > 10);

let res3: boolean = data3.some(value => value % 2 == 0);

let res4: boolean = data4.some(value => value % 2 == 0);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);



// Метод reduce(callback, initialValue) применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.

// callback
// Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:
// ее аргументы
//      previousValue
//          Значение, возвращённое предыдущим выполнением функции callback, либо значение initialValue, если оно предоставлено (смотрите пояснения ниже).
//      currentValue
//          Текущий обрабатываемый элемент массива.
//      currentIndex
//          Индекс текущего обрабатываемого элемента массива.
//      array
// 	        Массив, для которого была вызвана функция reduce.
//
// initialValue
// Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.

let arr6: number[] = [10, 2, 3, 4, 5, 6];

let total: number = arr6.reduce((prev, current) => {
    console.log("prev " + prev + " current " + current);
    return prev + current;
}, 0);

console.log(total);


let dataArray1: number[] = [1, 2, 3];
let dataArray2: number[] = [100, 200, ...dataArray1]; // spread operator - добавляем элементы массива dataArray1 в конец массива dataArray2

console.log(dataArray2);

let point2D = { x: 10, y: 20 };
let point3D = { ...point2D, z: 30 }; // object spread - свойства объекта point2D добавляются к свойствам объекта point3D

console.log(point3D);

class User {
    constructor(public name: string, public age: number) {
    }
}

let persons: User[] = [];
persons[0] = new User("Jim", 20);
persons[1] = new User("Ivan", 25);
persons[2] = new User("Bob", 23);
persons[3] = new User("David", 30);

console.log("for ... in"); // обход по свойствам объекта (в данном случае индексы массива)
for (let index in persons) {
    console.log(index);
}

console.log("for ... of"); // обход значений массива
for (let value of persons) {
    console.log(value);
}

