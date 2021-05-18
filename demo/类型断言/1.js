/*
* 类型断言：手动指定一个值的类型
* */
function getLength1(something) {
    if (something.length) {
        return (something).length; //类型不确定，报错
    }
    else {
        return something.toString().length;
    }
}
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
