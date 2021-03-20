<script lang="ts">
import { CreateElement } from 'vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})

export default class XwRenderCell extends Vue {

  @Prop({
    type: Function,
    required: true,
  })
  renderFn!: (h: CreateElement) => void

  
  render(h: CreateElement) {
    return this.renderFn(h)
  }
}
</script>
