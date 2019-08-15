//类的访问控制符,报错？？---构造函数
var Person = /** @class */ (function () {
    //在构造函数上一定要申请访问控制符；
    function Person(userName) {
        this.userName = userName;
    }
    Person.prototype.eat = function () {
        console.log(this.userName);
    };
    return Person;
}());
var p1 = new Person("xiaoming");
p1.eat();
