import { Component } from 'vue'

export interface TableOption {
  // element-ui 表格的配置属性
  tableAttribute: TableAttribute
  // 列的配置属性
  tableColumn: TableColumn[]
}

export interface TableAttribute {
  // 属性
  props: {
    data: object[]
    [index: string]: any
  }
  // 事件
  on: { [key: string]: Function | Function[] }
}

export interface TableColumn {
  // 属性
  props: {
    label?: string
    prop?: string
    [index: string]: any
  },
  // 插槽
  slots?: {
    [index: string]: {
      // 属性
      options?: object
      // 自定义组件
      component: Component
    }
  }
  // 多级表头
  columnChild?: TableColumn[]
}