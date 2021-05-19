/*
* 类型断言：手动指定一个值的类型,将一个联合类型断言为其中一个类型
* 语法一:  值 as 类型
* 语法二: <类型>值
* */

// 不使用断言时,容易报错
function getLength1(something: string | number): number {
    if (something.length) { //类型不确定，报错
        return (something).length;
    } else {
        return something.toString().length;
    }
}


// 不使用断言时,容易报错
function getLength2(something: string | number): number {
    if (typeof something==='string') {  // ts支持判断逻辑
        return (something).length;  // 所以这里不报错了
    } else {
        return something.toString().length;
    }
}
