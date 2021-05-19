//面向对象特性----泛型
/*
* 参数化的类型，一般用来限制集合的类型
* 定义：泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性；
* */

// 使用泛型定义一个数组

// 只支持number类型
let arr:Array<number>=[];
arr.push(1);
arr.push("hello"); // 提示类型不符


// 支持多种类型
let userName:Array<number,string>=[]

userName.push(1);
userName.push('a');
