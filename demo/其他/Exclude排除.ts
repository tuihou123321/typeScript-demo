type LableKey='a' | 'b' | 'time';

//排除掉联合类型中的值
type LableKeyPick=Exclude<LableKey, 'time'>;

let value1: LableKeyPick='a'; // 正常显示
let value2: LableKeyPick='time';  // 报错
