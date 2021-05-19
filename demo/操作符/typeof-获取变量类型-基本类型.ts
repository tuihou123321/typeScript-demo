type cnName = string;

let cnName : cnName='a';

let enName:typeof cnName;

cnName = 1;  // 报错，类型不符
cnName = '1';  // 正确显示


