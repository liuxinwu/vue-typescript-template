<template>
  <div class="pagination-container">
    <el-pagination
      v-bind="paginationOption"
      @current-change="handleCurrentChange"
      @prev-click="handleCurrentChange"
      @next-click="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Emit } from "vue-property-decorator"
  import { ElPagination } from "element-ui/types/pagination"

  @Component({})
  export default class XwPagination extends Vue {
    @Prop(Object) paginationOption!: ElPagination

    @Emit('update:paginationOption')
    emitCurrentChange(currentPage: number) {
      return Object.assign(this.paginationOption, { currentPage })
    }

    @Emit('onPagination')
    emitOnPagination() {
      return
    }

    handleCurrentChange(currentPage: number) {
      this.emitCurrentChange(currentPage)
      this.emitOnPagination()
    }
  }
</script>

<style lang="scss" scoped>
.pagination-container {
  display: flex;
  flex-direction: row-reverse;
}
</style>