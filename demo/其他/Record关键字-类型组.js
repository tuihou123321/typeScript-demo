/*
* Record
* */
var getUserInfo = function (params) {
    return {};
};
getUserInfo({ uid: 1, password: 'abc' }); // 报错，uid类型不符
getUserInfo({ uid: '1', password: 'abc' }); // 报错，uid类型不符
getUserInfo({ uid: 'a', password: 'abc', companyId: '11' }); // 正常显示
