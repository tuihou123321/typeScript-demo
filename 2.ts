//类的访问控制符,报错？？---构造函数
class Person {
    //在构造函数上一定要申请访问控制符；
    constructor(public userName:string){
    }
    public eat(){
        console.log(this.userName);
    }
}
let p1=new Person("xiaoming");
p1.eat();
