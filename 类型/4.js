/*
* 类型断言：手动指定值的类型
* 类型断言不是类型转换，断言成一个联合类型
* 语法： <type>value, value as type
* 说明：在tsx语法中必须使用后一种；
* */
/*
* 不使用类型断言报错
* */
function getLength1(value) {
    //类型不对，不能调用该对象的方法，这个时候可以使用类型断言来处理
    if (value.length) { //报错
        return value.length;
    }
    return value.toString().length;
}
console.log(getLength(1234));
/*
* 将一个联合类型的值，设置成一个更具体的类型
* */
function getLength(value) {
    //类型不对，不能调用该对象的方法，这个时候可以使用类型断言来处理
    if (value.length) {
        return value.length;
    }
    return value.toString().length;
}
console.log(getLength(1234));
/*
* 类型断言不是类型转换，断言成一个联合类型中不存的类型是不允许的
* */
function toBoolean(value) {
    return value; //报错
}
toBoolean(11);
