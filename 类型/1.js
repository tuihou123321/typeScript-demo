//申明类型
var age = 12;
//类型不符
age = "abc";
//类型推导：不申明类型，自动推导
var city = "shangHai";
//类型推断
city = 123;
console.log(city);
//不申请默认是any: 等价于 let inputValue:any;
var inputValue;
inputValue = 1;
inputValue = "a";
//可以是任意值
var value = "iphone";
value = 13;
