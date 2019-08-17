/*
* 对象的类型定义--接口
*接口定义：接口是对行为的抽象，而具体如何实现是由类（class）去实现（implement）
* ts，除了可用于对类的一部分行为进行抽象以外，了常用于对【对象的形状】进行描述；
* */
//设置专家的接口
//赋值的时候，变量的形状必须和接口的形状保持一致
var experts = {
    name: "jielun",
    age: 40,
    sex: "man",
    isOpenListen: false,
};
var jack = {
    name: "xiaoming",
    age: 10,
    sex: "man",
    isOpenListen: false,
};
var currentCourse = {
    id: 111,
    lists: [{
            name: "",
            type: "voice"
        }],
    comments: [
        {
            time: "45452112445",
            userName: "xiaoming",
        }
    ]
};
currentCourse.id = 44; //只读属性不能修改；
