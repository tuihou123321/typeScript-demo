// 定义一个类型
type OptionItem = {
    value:string;
    label:string;
}[]
// 定义一个变量，并规定类型
let optionItem : OptionItem;
// 创建一个新的类型，通过typeOf 变量来获得它的类型
// 能过typeOf 获取到变量或对象的类型（注意这是不能是type ,interface等定义的接口，也不能是泛型中的变量）
type ObjType = typeof  optionItem;


// 定义一个新的变量，这个变量只能接收指定的类型参数
let obj:ObjType;
obj = 1; // 报错类型不符

obj = [{
    value:'a',
    label:'a',
}]
