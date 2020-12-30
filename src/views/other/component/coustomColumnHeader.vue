<template>
  <div>
    <p>日期</p>
    <p>自定义头</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component({})
export default class CoustomColumnHeader extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  scope!: object

  created() {
    console.log('CoustomColumnHeader')
  }
}
</script>
