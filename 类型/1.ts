//申明类型
let age:number=12;
//类型不符
age="abc"

//不申请类型：自动推导
let city="shangHai";
//类型推断
city=123;
console.log(city);

//等价于 let inputValue:any;
let inputValue;
inputValue=1;
inputValue="a";


//可以是任意值
let value:any="iphone";
value=13;

//void类型一般用在函数中
let toast:void=undefined;

//null,undefined是所有类型的子集；
let num:number=undefined; //不会报错



