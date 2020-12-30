export interface SearchOption {
  elType: string
  label: string
  startKey: string
  endKey?: string
  startDefaultValue?: string | number | any[]
  endDefaultValue?: string | number | any[]
  options: object[]
  [index: string]: any
}

export interface SearchParams {
  [index: string]: string | number | any[]
}
