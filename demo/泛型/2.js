/*
* 泛型的定义：在定义函数、接口或类的时候，不预先指定具体的类型，而是使用时再指定类型的特性
* */
// 不使用泛型，无法准确知道函数的返回值类型
function createArray(length, value) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
}
createArray(3, 'a');
createArray(3, 100);
// 使用泛型的场景，定义好变量T，可指代任意输入的类型，T是变量可取其他名字，
function createArray2(length, value) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
}
createArray2(3, 'a');
createArray2(3, 100);
// 定义多个变量
// 交换元素的位置
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([1, 'a']);
swap(['a', 1]);
// 泛型约束
function getLength(value) {
    console.log(value.length); // 报错，value可能没有length属性
    return value;
}
function getLength2(value) {
    console.log(value.length); // 正确显示
    return value;
}
getLength2('a'); // 正确显示
getLength2(10); // 报错，参数不符
