const defaultArr = [{
    value:'a',
    label:'a',
}]

// 通过typeof 获取到对象的类型
type ObjType = typeof defaultArr;


const obj1: ObjType = [{
    value:'a',
    label:'a',
}];


const obj2: ObjType = [{
    value:1,    // 报错类型不符
    label:'a',
}];


const obj3: ObjType = [{
    value:'a',
    label:'a',
    name:'a'    // 未定义的参数报错
}];


