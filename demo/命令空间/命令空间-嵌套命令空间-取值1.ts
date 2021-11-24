// 跨文件获取全局这是需要引入对应路径
/// <reference path = "命令空间-嵌套命令空间.d.ts" />

// 自动导入
import ColumsChild1 = TableNested.Colums.ColumsChild1;

let obj : TableNested.Colums.ColumsChild1 = {

};


// ide自动会引入
let obj2: ColumsChild1;


