/*
* 数组类型的定义方法
* */

/*
* 一、类型+[]
* */
let arr:number[];
arr.push(1);
arr.push("1"); //报错，不允许的类型



/*
* 二、数组泛型 Array<elemType>
* */
let arr2:Array<number>;
arr2.push(1);
arr2.push("1"); //报错，不允许的类型

//定义数组内的多种类型
let arr21:Array<number | string>;
arr21.push(1);
arr21.push("a");

/*
* 三、接口表示数组
* NumberArray表示，只要index类型是number,那么值的类型也必须是number
* 类数组的概念
* */

interface NumberArray {
    [index:number]:number;
    length:number;
    push:(any)=> void;
}
let arr3:NumberArray;
arr3=[1]
arr3=['1']  //报错，不允许的类型

arr3.push(1)  // push方法要单独定义

let list:Array<any>=[1,"a",{key:10},()=>{},false]


