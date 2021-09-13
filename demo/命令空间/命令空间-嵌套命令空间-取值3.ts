// 跨文件获取全局这是需要引入对应路径
/// <reference path = "命令空间-嵌套命令空间.d.ts" />

// 没有导出，但是IDE能提示并自动引入，但是不推荐不写export
import Colums3 = TableNested.Colums3;

// ide自动会引入
let obj2: Colums3;


