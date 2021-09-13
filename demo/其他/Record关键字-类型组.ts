/*
* Record
* */

// 不使用Record定义
// type NimSDK = {
//     uid:string,
//     password:string
// }
// type GetUserInfo = (params:NimSDK)=> object;
// const getUserInfo:GetUserInfo =(params)=>{
//     return {};
// }
// getUserInfo({uid:'11', password:'abc'})


// 使用Record重写上面的方法
type NimSDK = Record<'uid' | 'password' , string> & Record<'companyId' , string>;

type GetUserInfo = (params:NimSDK)=> object;
const getUserInfo:GetUserInfo =(params)=>{
    return {};
}
getUserInfo({uid:1, password:'abc'})  // 报错，uid类型不符
getUserInfo({uid:'1', password:'abc'})  // 报错，uid类型不符


getUserInfo({uid:'a', password:'abc', companyId:'11'})  // 正常显示
