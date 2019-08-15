//面向对象特性----泛型
/*
* 参数化的类型，一般用来限制集合的类型
* 定义：泛型是指在定义函数、接口或类的时候，不预先指定具体的类弄，而在使用的时候再指定类型的一种特性；
* */

//数组泛型来定义返回值的类型
// function createArray(length: number, value: any):Array<any>{
//     let result=[];
//     for (let i=0;i<length;i++){
//         result.push(value);
//     }
//     return result;
// }
// console.log(createArray(3,"a"));

function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

console.log(createArray(3, 'x'));   // ['x', 'x', 'x']
