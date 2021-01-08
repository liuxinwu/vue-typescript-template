<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CreateElement } from "vue";

@Component({})
export default class CoustomColumn extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  scope!: { [index: string]: any };

  @Prop({
    type: Object,
    required: true,
  })
  options!: { [index: string]: any};

  render(h: CreateElement) {
    const scope = this.scope;
    const { el, props, on = {}, buttons } = this.options
    const value = scope.row[scope.prop]
    const isEdit = scope.row.isEdit || false

    // 对事件做一个函数劫持
    for (const eventNmae in on) {
      if (Object.prototype.hasOwnProperty.call(on, eventNmae)) {
        const eventCb = on[eventNmae];
        on[eventNmae] = (value: string | number | any[]) => {
          eventCb(value, scope.row, scope.prop)
        }
      }
    }

    // 没传组件的时候 或者 非编辑时
    if (!isEdit && !buttons || !el) {
      return h('span', value)
    }

    if (buttons) {
      return h(
        'div',
        buttons.map((button: { [index: string]: any }, index: number) => {
          return button.show(scope.row) ? h(
            el,
            {
              props: {
                ...props,
                ...button.props,
                loading: scope.row[button.loading]
              },
              on: {
                click: () => {
                  button.click && button.click(scope.row, button)
                }
              },
              directives: button.directives,
              key: `button_${index}`
            },
            button.text as string
          ) : ''
        })
      )
    }

    return h(
      el,
      {
        props: {
          ...props,
          value,
          key: `${scope.label}-${scope.prop}`,
        },
        on: {
          input: (value:  string | number | any[]) => {
            this.handleInput(value)
          },
          ...on
        }
      }
    )
  }

  handleInput(value: string | number | any[]) {
    const scope = this.scope
    scope.row[scope.prop] = value
  }
}
</script>
