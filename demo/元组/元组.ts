 // 无组类型，严格约束数组成员的数量，类型，位置
let IdAndName:[number, string, number?];

IdAndName=['xz'];  // 报错，参数类型不符
IdAndName=[1];  // 报错，少了参数
IdAndName=[1,'a',1,1];  // 报错，多了参数


IdAndName=[1,'a',1];  // 正确
IdAndName=[1,'a'];  // 正确
