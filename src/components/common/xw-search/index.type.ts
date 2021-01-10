export interface SearchOption {
  // 标签元素
  elType: string
  // 标签名称
  label: string
  // 搜索 key
  startKey: string
  // 搜索 key(结束 适用于区间搜索)
  endKey?: string
  // 默认值
  startDefaultValue?: string | number | any[]
  endDefaultValue?: string | number | any[]
  // 传给 element 表单组件的属性
  props?: object
  // 嵌套子组件的数据来源 例如：el-select -> el-option
  options?: object[]
}

export interface SearchParams {
  [index: string]: string | number | any[]
}
