let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
array.forEach(value => sum += value);
console.log("sum " + sum);
array.forEach((value, index, array) => {
    array[index] = value + 1;
});
console.log(array);
let array2 = [1, 2, 3, 4, 5];
let array3 = array2.map(function (value) {
    return value * value;
});
console.log(array2);
console.log(array3);
let array4 = [1, 2, 3, 4, 5, 6];
var array5 = array4.filter(value => value % 2 == 0);
console.log(array4);
console.log(array5);
let data1 = [1, 2, 3, 4, 5, 6];
let data2 = [11, 21, 31, 41];
let data3 = [1, 3, 5, 7, 9];
let data4 = [1, 3, 5, 7, 8, 9];
let res1 = data1.every(value => value > 10);
let restES5 = data1.every(function (item) {
    return item > 10;
});
let res2 = data2.every(value => value > 10);
let res3 = data3.some(value => value % 2 == 0);
let res4 = data4.some(value => value % 2 == 0);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
let arr6 = [10, 2, 3, 4, 5, 6];
let total = arr6.reduce((prev, current) => {
    console.log("prev " + prev + " current " + current);
    return prev + current;
}, 0);
console.log(total);
let dataArray1 = [1, 2, 3];
let dataArray2 = [100, 200, ...dataArray1];
console.log(dataArray2);
let point2D = { x: 10, y: 20 };
let point3D = Object.assign({}, point2D, { z: 30 });
console.log(point3D);
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let persons = [];
persons[0] = new User("Jim", 20);
persons[1] = new User("Ivan", 25);
persons[2] = new User("Bob", 23);
persons[3] = new User("David", 30);
console.log("for ... in");
for (let index in persons) {
    console.log(index);
}
console.log("for ... of");
for (let value of persons) {
    console.log(value);
}
//# sourceMappingURL=arrays.js.map