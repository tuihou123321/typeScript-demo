/*
* 声明合并：
* 定义：相同名字的函数、接口、类最后会合并成一个类型；
* */
function reverse2(x) {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    }
    else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}
var userInfo;
userInfo.userName = "xm";
userInfo.age = 25;
userInfo.id = 100000; //报错，interface里面没有这个类型；
function header(obj) {
    return { obj: obj, : .title } < /div>;
}
header();
