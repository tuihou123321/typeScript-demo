//联合类型
let userName:number | string;
userName=11;
userName="a";
userName=null;
userName=undefined;
//不支持的类型
userName=()=>{console.log(1);};

//访问联合类型的属性和方法；
