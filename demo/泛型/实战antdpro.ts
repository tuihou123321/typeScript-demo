export declare type ExtraProColumnType = {
    className?: string;
};

export declare type ProSchemaComponentTypes = 'form' | 'list' | 'descriptions' | 'table' | 'cardList' | undefined;

export declare type ProSchema<Entity = Record<string, any>, ExtraProps = unknown, ComponentsType = ProSchemaComponentTypes, ValueType = 'text'> = {
    tip?: string;
} & ExtraProps;

export declare type FormFieldType = 'group' | 'formList' | 'formSet' | 'divider';

export declare type ProFormColumnsType<T = any, ValueType = 'text'> = ProSchema<T, ExtraProColumnType & {
    index?: number;
    /** 嵌套子项 */
    columns?: ProFormColumnsType<T, ValueType | FormFieldType>[];
}, ProSchemaComponentTypes, ValueType | FormFieldType>;


const colums:ProFormColumnsType = {
    index:1,
    className:'aa',
    tip:'aaa',
    a:11,  // 报错，a不在对象中
    columns:[
        {
            index:1
        }
    ]
}


const colums2:ProFormColumnsType = {
    index:1,
    className:'aa',
    tip:'aaa',
    columns:[
        {
            index:1,
            a:11,  // 报错，a不在对象中
        }
    ]
}
