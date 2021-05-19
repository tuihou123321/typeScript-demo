/*
* 使用泛型可以准确的知道，返回值的类型（和输入的类型关联起来）
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
