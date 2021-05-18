/*
* 函数类型的定义
* */
//为函数设置返回值
function getUserName() {
    return 1;
}
//不需要返回值
function startLogin() {
    return 10;
}
function isVersion(currentVersion, oldVersion) {
    return true;
}
isVersion("2.12.11", "2.12.00");
isVersion();
//可选参数一定要写在必选参数的后面
//要有可选参数的时候，要在方法体内处理可选参数没传的情况
function getLength(a, b, c) {
    if (c === void 0) { c = 1; }
    return a.length + (b ? b.length : 0) + 1;
}
getLength("hello");
function getString(value) {
    return value.toString;
}
//只能访问联合属性的共同方法；
function getValueLength(value) {
    return value.length; //报错，
}
/*
* 函数重载：一个函数接受不同数量或者类型的参数时，作出不同的处理；
* 联合类型，
* */
/*
* 下面的方法，不能准确的表达，
* 输入为number 输出为number
* */
function reverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    }
    else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}
console.log(reverse(123), typeof reverse(123));
function reverse2(x) {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    }
    else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}
console.log(reverse2(123));
var add = function (a, b) {
    return a + b;
};
