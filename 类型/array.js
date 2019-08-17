/*
* 数组类型的定义方法
* */
/*
* 一、类型+[]
* */
var arr;
arr.push(1);
arr.push("1"); //报错，不允许的类型
/*
* 二、数组泛型 Array<elemType>
* */
var arr2;
arr2.push(1);
//定义数组内的多种类型
var arr21;
arr21.push(1);
arr21.push("a");
var arr3;
arr3.push("1"); //类型不符，报错
var list = [1, "a", { key: 10 }, function () { }, false];
