export interface TableOption {
  tableAttribute: TableAttribute
  tableColumn: TableColumn
}

export interface TableAttribute {
  props: {
    data: any[]
    [index: string]: any
  }
  on: { [key: string]: Function | Function[] }
}

export interface TableColumn {
  props: {
    label: string
    prop: string
  },
  columnChild?: TableColumn[]
  [index: string]: any
}