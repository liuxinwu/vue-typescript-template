import { CreateElement } from "vue"
import { Vue, Component, Prop } from "vue-property-decorator"
import { TableAttribute } from "./index.type"

@Component({})
export default class GenerateElTable extends Vue {
  @Prop()
  tableAttribute!: TableAttribute

  render(h: CreateElement) {
    const { props = {}, on = {} } = this.tableAttribute

    return h(
      'el-table',
      {
        props,
        on
      },
      this.$slots.default
    )
  }
}
