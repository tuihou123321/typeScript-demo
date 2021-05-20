// 结合联合类型，可以定义一个字面量类型

// 字面量定义string
type TrackType = 'click' | 'pv';
let trackType:TrackType = 1; // 报错，类型不符

// 字面量定义number
type SelectId = 0 | 1;
let selectId: SelectId=3; // 报错，类型不符


// 字面量定义数组
type Arr=[1,2] | [2,3?];

let arr:Arr=[1,1] // 类型不符
let arr4:Arr=[1] // 类型不符

let arr2:Arr=[1,2] // 正常
let arr3:Arr=[2] // 正常


// 字面量：定义对象
type Obj={a:1,b?:2}

let obj:Obj={
    c:1   // 类型不符
}
