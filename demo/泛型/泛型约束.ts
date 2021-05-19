// 不使用泛型约束，定义时可能报错
function getLength<T>(value:T):T {
    console.log(value.length); // 报错，value可能没有length属性
    return value;
}



// 使用泛型约束，参数输入时会自动报错
interface getLengthParams {
    length:number;
}
function getLength2<T extends getLengthParams>(value:T):T {
    console.log(value.length);  // 正确显示
    return value;
}

getLength2('a'); // 正确显示
getLength2(10); // 报错，参数不符

