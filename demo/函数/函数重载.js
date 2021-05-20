/*
* 函数的重载：允许一个函数接受不同数量或类型的参数时，作出不同的处理
* */
function getLength(value) {
    if (typeof value === 'string') {
        return value;
    }
    else if (typeof value === 'number') {
        return value;
    }
}
getLength(1);
getLength('a');
getLength(); // 报错
