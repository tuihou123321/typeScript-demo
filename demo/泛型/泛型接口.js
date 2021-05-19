var createArray = function (length, value) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
};
createArray(3, 'a');
createArray(3, 100);
// 使用泛型的场景，定义好变量T，可指代任意输入的类型，T是变量可取其他名字，
var createArray2 = function (length, value) {
    var arr = []; // 这里可以使用typeof 定义value子项的内容类型
    for (var i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
};
createArray2(3, 'a');
createArray2('a', 'a'); //类型不符报错
// // 使用泛型定义接口
// interface CreateArray2<T> {
//     (length:number, value:T):T[]
// }
// // 使用泛型的场景，定义好变量T，可指代任意输入的类型，T是变量可取其他名字，
// const createArray2: CreateArray2<any> = ( length, value ) => {
//     let arr = [];
//     for (let i=0; i<length; i++){
//         arr[i]=value;
//     }
//     return arr;
// }
//
// createArray2(3,'a');
// createArray2(3,100);
// createArray2('a',100);  //类型不符报错
