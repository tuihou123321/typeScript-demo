type Button ={
    type:'default' | 'primary',
    loading:Boolean,
    icon:string,
}


// 报错类型不对
let button:Button={
    type:'default'
}

// 使用Partial关键字 ，所有参数可选
let button2:Partial<Button>={
    type:'default'
}
