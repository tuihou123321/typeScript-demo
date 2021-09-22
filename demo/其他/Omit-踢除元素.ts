type Obj = {
    name:string,
    age:number,
    weight:string
}

// 剔除 age, weight属性
type Obj2=Omit<Obj, 'age' | 'weight'>

let obj2:Obj2 = {
    name:'a'
}
