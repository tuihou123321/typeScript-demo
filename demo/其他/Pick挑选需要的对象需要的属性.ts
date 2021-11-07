type Obj = {
    name:string,
    age:number,
    weight:string
}

// 只需要 age, weight属性
type Obj2=Pick<Obj, 'age' | 'weight'>

let obj2:Obj2 = {
    name:'a'  // name会报错
}

let obj3:Obj2 = {
    age:1,
    weight:'a'
}
