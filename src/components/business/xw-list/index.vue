<template>
  <div class="list-container">
    <header class="list-header animate__animated animate__fadeIn">
      <slot name="head" />
      <xw-search
        v-if="searchOption"
        :searchOption="searchOption"
        :searchParams="searchParams"
        @onSearch="getList"
      >
        <slot name="search" />
      </xw-search>
    </header>

    <main class="list-main">
      <slot name="main" />
      <xw-table :tableOption="tableOption" />
    </main>

    <footer class="list-footer">
      <slot name="footer" />
      <xw-pagination
        v-if="paginationOption"
        :paginationOption.sync="paginationOption"
        @onPagination="getList"
      />
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import {
  SearchOption,
  TableOption,
  PaginationOption,
  SearchParams,
} from "./index.type";
import XwSearch from "@/components/common/xw-search/index.vue";
import XwTable from "@/components/common/xw-table/index.vue";
import XwPagination from "@/components/common/xw-pagination/index.vue";

@Component({
  components: {
    XwSearch,
    XwTable,
    XwPagination,
  },
})
export default class XwList extends Vue {
  @Prop(Array)
  searchOption?: SearchOption[];

  @Prop({
    type: Object,
    required: true,
  })
  tableOption!: TableOption;

  @Prop(Object)
  paginationOption?: PaginationOption;

  @Emit('getList')
  emitGetList(params: { [index: string]: number | string | undefined }) {
    return params
  }

  // 搜索结果
  searchParams: SearchParams = {};

  mounted() {
    this.getList()
  }

  getList() {
    const params = {
      ...this.searchParams,
      currentPage: this.paginationOption?.currentPage,
    };
    this.emitGetList(params)
  }
}
</script>

<style lang="scss" scoped>
.list-header {
  padding: 20px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.list-main {
  margin: 20px 0;
}

.list-footer {
  padding: 10px;
}
</style>
