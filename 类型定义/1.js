//申明类型
var age = 12;
//类型不符
age = "abc";
//不申请类型：自动推导
var city = "shangHai";
//类型推断
city = 123;
console.log(city);
//等价于 let inputValue:any;
var inputValue;
inputValue = 1;
inputValue = "a";
//可以是任意值
var value = "iphone";
value = 13;
//void类型一般用在函数中
var toast = undefined;
//null,undefined是所有类型的子集；
var num = undefined; //不会报错
