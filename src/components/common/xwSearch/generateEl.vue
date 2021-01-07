<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator"
  import { SearchOption, SearchParams } from "./index.type"
  import { CreateElement } from "vue"
  import { VNodeChildren } from "vue/types/vnode.d"

  @Component({})
  export default class GenerateEl extends Vue {
    @Prop({
      type: Object,
      required: true
    })
    option!: SearchOption

    @Prop({
      type: Object,
      required: true
    })
    searchParams!: SearchParams

    render(h: CreateElement) {
      const option = this.option
      const { startKey = '', endKey = '' } = option
      const searchParams = this.searchParams
      let value = searchParams[startKey]

      // 处理区间选择
      if (endKey) {
        value = [searchParams[startKey], searchParams[endKey]]
      }

      return h(
        option.elType,
        { 
          props: {
            ...option.props,
            value,
            key: `${option.label}-${option.elType}`
          },
          on: {
            input: this.handleInput,
            change: this.handleChange
          }
        },
        this.generateChaild(h)
      )
    }

    generateChaild(h: CreateElement): VNodeChildren {
      const option = this.option
      if (option.elType !== 'el-select') return
      if (option.options === undefined) return

      return option.options.map(option => (h(
        'el-option',
        {
          props: {
            ...option
          }
        }
        )))
    }

    handleInput(value: string | number | any[]) {
      const option = this.option

      // 处理区间选择
      if (Array.isArray(value) && option.endKey) {
        this.searchParams[option.startKey] = value[0]
        this.searchParams[option.endKey] = value[1]
        return
      }

      this.searchParams[option.startKey] = value
    }

    handleChange(value: SearchParams) {
      console.log(value, "handleChange")
    }
  }
</script>

<style lang="scss" scoped>
</style>