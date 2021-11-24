// 不使用泛型约束，定义时可能报错
function getLength<T>(value:T):T {
    console.log(value.length); // 报错，value可能没有length属性
    return value;
}
// T是任意变量
getLength('a'); // 正确显示
getLength(10); // 正确显示



// 使用泛型约束，参数输入时会自动报错
interface getLengthParams {
    length:number;
}
function getLength2<T extends getLengthParams>(value:T):T {
    console.log(value.length);  // 正确显示， 函数定义了value具有length属性
    return value;
}

getLength2('a'); // 正确显示
getLength2(10); // 报错，参数不符, number没有length属性


//-------------------------------------------------

// 使用泛型约束，参数输入时会自动报错
interface getLengthParams2 {
    name:string;
}
function getLength3<T extends getLengthParams2>(value:T):T {
    console.log(value.name);  // 正确显示
    return value;
}

getLength3({
    name:'xz'
}); // 正确显示
getLength3(10); // 报错，参数不符



//-------------------------------------------------

// [其他写法] 使用泛型约束，参数输入时会自动报错
function getLength4<T extends {
    name:string;
}>(value:T):T {
    console.log(value.name);  // 正确显示
    return value;
}

getLength4({
    name:'xz'
}); // 正确显示
getLength4(10); // 报错，参数不符
