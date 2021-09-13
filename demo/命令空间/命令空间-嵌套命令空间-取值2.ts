// 跨文件获取全局这是需要引入对应路径
/// <reference path = "命令空间-嵌套命令空间.d.ts" />

// 虽然Colums10没有导出，但是IDE能提示，但是不推荐不写export
import ColumsChild1 = TableNested.Colums.ColumsChild1;


// ide自动会引入
let obj2: ColumsChild1;


