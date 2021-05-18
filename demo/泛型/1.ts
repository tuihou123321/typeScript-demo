/*
* 泛型的定义：
*
* */

//定义arr 只能接收number类型的数据；

// 只支持number类型
let arr:Array<number>=[];
arr.push(1);
arr.push("hello"); // 提示类型不符


// 支持多种类型
let userName:Array<number,string>=[]

userName.push(1);
userName.push('a');
