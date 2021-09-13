/*
* 类型断言：手动指定一个值的类型,将一个联合类型断言为其中一个类型
* */

// 断言支持if判断语句
function getLength(something: string | number): number {
    console.log(something.length);  // 类型可能是number，导致报错
    if (typeof something==='string') {  // ts支持判断逻辑
        return something.length;  // 所以这里不报错了
    } else {
        return something.toString().length;
    }
}
