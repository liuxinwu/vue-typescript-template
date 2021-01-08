import { CreateElement } from "vue";
import { Vue, Component, Prop } from "vue-property-decorator";
import { ScopedSlot, VNodeChildren } from "vue/types/vnode.d";
import { TableColumn } from "./index.type";

@Component({})
export default class GenerateElTableColumn extends Vue {
  @Prop()
  column!: TableColumn;

  render(h: CreateElement) {
    return this.generateTableColumn(h, this.column);
  }

  generateTableColumn(h: CreateElement, column: TableColumn) {
    const scopedSlots: { [key: string]: ScopedSlot | undefined; } = {}
    const { props, slots = {}, columnChild } = column
    for (const slotName in slots || {}) {
      if (Object.prototype.hasOwnProperty.call(slots, slotName)) {
        scopedSlots[slotName] = (props: any) => {
          return h(slots[slotName].component, {
            props: {
              scope: {
                $index: props.$index,
                column: props.column,
                row: props.row || {},
                prop: column.props.prop
              },
              options: (slots[slotName].options || {})
            }
          })
        }
      }
    }

    return h(
      "el-table-column",
      {
        props,
        scopedSlots,
      },
      this.generateChild(h, columnChild)
    );
  }

  generateChild(
    h: CreateElement,
    columnChild: TableColumn[] | undefined
  ): VNodeChildren {
    if (!Array.isArray(columnChild)) return

    return columnChild.map((column) => {
      return this.generateTableColumn(h, column);
    });
  }
}
