export { SearchOption, SearchParams } from "@/components/common/xwSearch/index.type"

export { TableOption } from "@/components/common/xwTable/index.type"
export interface PaginationOption {
  total: number
  currentPage?: number
  [index: string]: any
}